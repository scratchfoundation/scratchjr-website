var async = require('async');
var defaults = require('lodash.defaults');

var route_json = require('../src/routes.json');

const FASTLY_SERVICE_ID = process.env.FASTLY_SERVICE_ID || '';
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME || '';
const BUCKET_NAME_HEADER_NAME = 'Bucket name';

var fastly = require('./lib/fastly-extended')(process.env.FASTLY_API_KEY, FASTLY_SERVICE_ID);

/*
 * Translate an express-style pattern e.g. /path/:arg/ to a regex
 * all :arguments become .+?
 */
var expressPatternToRegex = function (pattern) {
    return pattern.replace(/(:[^/]+)/gi, '.+?');
};

var getConditionNameForRoute = function (route, type) {
    return 'routes/' + route.pattern + ' (' + type + ')';
};

var getHeaderNameForRoute = function (route) {
    if (route.name) return 'rewrites/' + route.name;
    if (route.redirect) return 'redirects/' + route.pattern;
};

var getResponseNameForRoute = function (route) {
    return 'redirects/' + route.pattern;
};

var routes = route_json.map(function (route) {
    return defaults({}, {pattern: expressPatternToRegex(route.pattern)}, route);
});

async.auto({
    version: function (cb) {
        fastly.getLatestVersion(function (err, response) {
            if (err) return cb(err);
            // Validate latest version before continuing
            if (response.active || response.locked) {
                fastly.cloneVersion(response.number, function (err, response) {
                    if (err) return cb('Failed to clone latest version: ' + err);
                    cb(null, response.number);
                });
            } else {
                cb(null, response.number);
            }
        });
    },
    setBucketNameHeader: ['version', function (cb, results) {
        var header = {
            name: BUCKET_NAME_HEADER_NAME,
            action: 'set',
            ignore_if_set: 0,
            type: 'REQUEST',
            dst: 'http.host',
            src: '"' + S3_BUCKET_NAME + '"',
            priority: 1
        };
        fastly.setFastlyHeader(results.version, header, cb);
    }],
    appRouteRequestConditions: ['version', function (cb, results) {
        var conditions = {};
        async.forEachOf(routes, function (route, id, cb2) {
            var condition = {
                name: getConditionNameForRoute(route, 'request'),
                statement: 'req.url ~ "' + route.pattern + '"',
                type: 'REQUEST',
                // Priority needs to be > 1 to not interact with http->https redirect
                priority: 10 + id
            };
            fastly.setCondition(results.version, condition, function (err, response) {
                if (err) return cb2(err);
                conditions[id] = response;
                cb2(null, response);
            });
        }, function (err) {
            if (err) return cb(err);
            cb(null, conditions);
        });
    }],
    appRouteHeaders: ['version', 'appRouteRequestConditions', function (cb, results) {
        var headers = {};
        async.forEachOf(routes, function (route, id, cb2) {
            if (route.redirect) {
                async.auto({
                    responseCondition: function (cb3) {
                        var condition = {
                            name: getConditionNameForRoute(route, 'response'),
                            statement: 'req.url ~ "' + route.pattern + '"',
                            type: 'RESPONSE',
                            priority: id
                        };
                        fastly.setCondition(results.version, condition, cb3);
                    },
                    responseObject: function (cb3) {
                        var responseObject = {
                            name: getResponseNameForRoute(route),
                            status: 301,
                            response: 'Moved Permanently',
                            request_condition: getConditionNameForRoute(route, 'request')
                        };
                        fastly.setResponseObject(results.version, responseObject, cb3);
                    },
                    redirectHeader: ['responseCondition', function (cb3, redirectResults) {
                        var header = {
                            name: getHeaderNameForRoute(route),
                            action: 'set',
                            ignore_if_set: 0,
                            type: 'RESPONSE',
                            dst: 'http.Location',
                            src: '"' + route.redirect + '"',
                            response_condition: redirectResults.responseCondition.name
                        };
                        fastly.setFastlyHeader(results.version, header, cb3);
                    }]
                }, function (err, redirectResults) {
                    if (err) return cb2(err);
                    headers[id] = redirectResults.redirectHeader;
                    cb2(null, redirectResults);
                });
            } else {
                var header = {
                    name: getHeaderNameForRoute(route, 'request'),
                    action: 'set',
                    ignore_if_set: 0,
                    type: 'REQUEST',
                    dst: 'url',
                    src: '"/' + route.name + '.html"',
                    request_condition: results.appRouteRequestConditions[id].name,
                    priority: 10
                };
                fastly.setFastlyHeader(results.version, header, function (err, response) {
                    if (err) return cb2(err);
                    headers[id] = response;
                    cb2(null, response);
                });
            }
        }, function (err) {
            if (err) return cb(err);
            cb(null, headers);
        });
    }]},
    function (err, results) {
        if (err) throw new Error(err);
        if (process.env.FASTLY_ACTIVATE_CHANGES) {
            fastly.activateVersion(results.version, function (err, response) {
                if (err) throw new Error(err);
                process.stdout.write('Successfully configured and activated version ' + response.number + '\n');
                fastly.purgeAll(FASTLY_SERVICE_ID, function (err) {
                    if (err) throw new Error(err);
                    process.stdout.write('Purged all.\n');
                });
            });
        }
    }
);
