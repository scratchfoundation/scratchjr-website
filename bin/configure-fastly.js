var promisify = require('util').promisify;
var defaults = require('lodash.defaults');

var route_json = require('../src/routes.json');

const FASTLY_SERVICE_ID = process.env.FASTLY_SERVICE_ID || '';
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME || '';
const BUCKET_NAME_HEADER_NAME = 'Bucket name';

var fastly = require('./lib/fastly-extended')(process.env.FASTLY_API_KEY, FASTLY_SERVICE_ID);

// The fastly-extended helpers are callback-style; promisify the ones we use.
var getLatestVersion = promisify(fastly.getLatestVersion.bind(fastly));
var cloneVersion = promisify(fastly.cloneVersion.bind(fastly));
var setCondition = promisify(fastly.setCondition.bind(fastly));
var setFastlyHeader = promisify(fastly.setFastlyHeader.bind(fastly));
var setResponseObject = promisify(fastly.setResponseObject.bind(fastly));
var activateVersion = promisify(fastly.activateVersion.bind(fastly));
var purgeAll = promisify(fastly.purgeAll.bind(fastly));

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

// Get the latest version, cloning it first if it is already active or locked.
var getWorkingVersion = async function () {
    var response = await getLatestVersion();
    if (response.active || response.locked) {
        var cloned;
        try {
            cloned = await cloneVersion(response.number);
        } catch (err) {
            throw new Error('Failed to clone latest version: ' + err);
        }
        return cloned.number;
    }
    return response.number;
};

var setBucketNameHeader = function (version) {
    return setFastlyHeader(version, {
        name: BUCKET_NAME_HEADER_NAME,
        action: 'set',
        ignore_if_set: 0,
        type: 'REQUEST',
        dst: 'http.host',
        src: '"' + S3_BUCKET_NAME + '"',
        priority: 1
    });
};

// Create a request condition per route and return them keyed by route index.
var setAppRouteRequestConditions = async function (version) {
    var conditions = [];
    await Promise.all(routes.map(async function (route, id) {
        conditions[id] = await setCondition(version, {
            name: getConditionNameForRoute(route, 'request'),
            statement: 'req.url ~ "' + route.pattern + '"',
            type: 'REQUEST',
            // Priority needs to be > 1 to not interact with http->https redirect
            priority: 10 + id
        });
    }));
    return conditions;
};

var setRedirectRouteHeader = async function (version, route, id) {
    var responseCondition = await setCondition(version, {
        name: getConditionNameForRoute(route, 'response'),
        statement: 'req.url ~ "' + route.pattern + '"',
        type: 'RESPONSE',
        priority: id
    });
    await setResponseObject(version, {
        name: getResponseNameForRoute(route),
        status: 301,
        response: 'Moved Permanently',
        request_condition: getConditionNameForRoute(route, 'request')
    });
    return setFastlyHeader(version, {
        name: getHeaderNameForRoute(route),
        action: 'set',
        ignore_if_set: 0,
        type: 'RESPONSE',
        dst: 'http.Location',
        src: '"' + route.redirect + '"',
        response_condition: responseCondition.name
    });
};

var setRewriteRouteHeader = function (version, route, requestCondition) {
    return setFastlyHeader(version, {
        name: getHeaderNameForRoute(route, 'request'),
        action: 'set',
        ignore_if_set: 0,
        type: 'REQUEST',
        dst: 'url',
        src: '"/' + route.name + '.html"',
        request_condition: requestCondition.name,
        priority: 10
    });
};

// Create the response/request header for every route (redirects vs. rewrites).
var setAppRouteHeaders = function (version, requestConditions) {
    return Promise.all(routes.map(function (route, id) {
        if (route.redirect) {
            return setRedirectRouteHeader(version, route, id);
        }
        return setRewriteRouteHeader(version, route, requestConditions[id]);
    }));
};

var configureFastly = async function () {
    var version = await getWorkingVersion();
    // The bucket header and the request conditions depend only on the version,
    // so run them together; the route headers depend on the request conditions.
    var results = await Promise.all([
        setBucketNameHeader(version),
        setAppRouteRequestConditions(version)
    ]);
    await setAppRouteHeaders(version, results[1]);
    return version;
};

configureFastly()
    .then(async function (version) {
        if (!process.env.FASTLY_ACTIVATE_CHANGES) return;
        var response = await activateVersion(version);
        process.stdout.write('Successfully configured and activated version ' + response.number + '\n');
        await purgeAll(FASTLY_SERVICE_ID);
        process.stdout.write('Purged all.\n');
    })
    .catch(function (err) {
        process.stderr.write((err && err.stack ? err.stack : err) + '\n');
        process.exit(1);
    });
