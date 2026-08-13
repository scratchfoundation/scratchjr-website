const routeJson = require('../src/routes.json');
const {routesToSnippets} = require('./lib/routes-to-vcl');

const FASTLY_SERVICE_ID = process.env.FASTLY_SERVICE_ID || '';

const fastly = require('./lib/fastly-extended')(process.env.FASTLY_API_KEY, FASTLY_SERVICE_ID);

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

// Render routes.json into VCL snippets and write them to the version.
const setAppRouteSnippets = version => Promise.all(
    routesToSnippets(routeJson).map(snippet => fastly.setSnippet(version, snippet))
);

const configureFastly = async () => {
    const version = await getWorkingVersion();
    await setAppRouteSnippets(version);
    // Compile-check the generated VCL before anything tries to activate it.
    const validation = await fastly.validateVersion(version);
    if (validation.status !== 'ok') {
        throw new Error(`Version ${version} failed validation: ${validation.msg}`);
    }
    return version;
};

configureFastly()
    .then(async version => {
        if (process.env.FASTLY_ACTIVATE_CHANGES !== 'true') return;
        const response = await fastly.activateVersion(version);
        process.stdout.write(`Successfully configured and activated version ${response.number}\n`);
        await fastly.purgeAll(FASTLY_SERVICE_ID);
        process.stdout.write('Purged all.\n');
    })
    .catch(err => {
        process.stderr.write(`${err && err.stack ? err.stack : err}\n`);
        process.exit(1);
    });
