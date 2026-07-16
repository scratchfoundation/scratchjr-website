const defaults = require('lodash.defaults');

const routeJson = require('../src/routes.json');

const FASTLY_SERVICE_ID = process.env.FASTLY_SERVICE_ID || '';
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME || '';
const BUCKET_NAME_HEADER_NAME = 'Bucket name';

const fastly = require('./lib/fastly-extended')(process.env.FASTLY_API_KEY, FASTLY_SERVICE_ID);

/*
 * Translate an express-style pattern e.g. /path/:arg/ to a regex
 * all :arguments become .+?
 */
const expressPatternToRegex = pattern => pattern.replace(/(:[^/]+)/gi, '.+?');

const getConditionNameForRoute = (route, type) => `routes/${route.pattern} (${type})`;

const getHeaderNameForRoute = route => {
    if (route.name) return `rewrites/${route.name}`;
    if (route.redirect) return `redirects/${route.pattern}`;
};

const getResponseNameForRoute = route => `redirects/${route.pattern}`;

const routes = routeJson.map(route => defaults({}, {pattern: expressPatternToRegex(route.pattern)}, route));

// Get the latest version, cloning it first if it is already active or locked.
const getWorkingVersion = async () => {
    const response = await fastly.getLatestVersion();
    if (response.active || response.locked) {
        let cloned;
        try {
            cloned = await fastly.cloneVersion(response.number);
        } catch (err) {
            throw new Error(`Failed to clone latest version: ${err}`);
        }
        return cloned.number;
    }
    return response.number;
};

const setBucketNameHeader = version => fastly.setFastlyHeader(version, {
    name: BUCKET_NAME_HEADER_NAME,
    action: 'set',
    ignore_if_set: 0,
    type: 'REQUEST',
    dst: 'http.host',
    src: `"${S3_BUCKET_NAME}"`,
    priority: 1
});

// Create a request condition per route and return them keyed by route index.
const setAppRouteRequestConditions = async version => {
    const conditions = [];
    await Promise.all(routes.map(async (route, id) => {
        conditions[id] = await fastly.setCondition(version, {
            name: getConditionNameForRoute(route, 'request'),
            statement: `req.url ~ "${route.pattern}"`,
            type: 'REQUEST',
            // Priority needs to be > 1 to not interact with http->https redirect
            priority: 10 + id
        });
    }));
    return conditions;
};

const setRedirectRouteHeader = async (version, route, id) => {
    const responseCondition = await fastly.setCondition(version, {
        name: getConditionNameForRoute(route, 'response'),
        statement: `req.url ~ "${route.pattern}"`,
        type: 'RESPONSE',
        priority: id
    });
    await fastly.setResponseObject(version, {
        name: getResponseNameForRoute(route),
        status: 301,
        response: 'Moved Permanently',
        request_condition: getConditionNameForRoute(route, 'request')
    });
    return fastly.setFastlyHeader(version, {
        name: getHeaderNameForRoute(route),
        action: 'set',
        ignore_if_set: 0,
        type: 'RESPONSE',
        dst: 'http.Location',
        src: `"${route.redirect}"`,
        response_condition: responseCondition.name
    });
};

const setRewriteRouteHeader = (version, route, requestCondition) => fastly.setFastlyHeader(version, {
    name: getHeaderNameForRoute(route, 'request'),
    action: 'set',
    ignore_if_set: 0,
    type: 'REQUEST',
    dst: 'url',
    src: `"/${route.name}.html"`,
    request_condition: requestCondition.name,
    priority: 10
});

// Create the response/request header for every route (redirects vs. rewrites).
const setAppRouteHeaders = (version, requestConditions) => Promise.all(routes.map((route, id) => {
    if (route.redirect) {
        return setRedirectRouteHeader(version, route, id);
    }
    return setRewriteRouteHeader(version, route, requestConditions[id]);
}));

const configureFastly = async () => {
    const version = await getWorkingVersion();
    // The bucket header and the request conditions depend only on the version,
    // so run them together; the route headers depend on the request conditions.
    const results = await Promise.all([
        setBucketNameHeader(version),
        setAppRouteRequestConditions(version)
    ]);
    await setAppRouteHeaders(version, results[1]);
    return version;
};

configureFastly()
    .then(async version => {
        if (!process.env.FASTLY_ACTIVATE_CHANGES) return;
        const response = await fastly.activateVersion(version);
        process.stdout.write(`Successfully configured and activated version ${response.number}\n`);
        await fastly.purgeAll(FASTLY_SERVICE_ID);
        process.stdout.write('Purged all.\n');
    })
    .catch(err => {
        process.stderr.write(`${err && err.stack ? err.stack : err}\n`);
        process.exit(1);
    });
