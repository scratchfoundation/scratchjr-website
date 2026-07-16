const routeJson = require('../src/routes.json');
const {routesToSnippets} = require('./lib/routes-to-vcl');

const FASTLY_SERVICE_ID = process.env.FASTLY_SERVICE_ID || '';
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME || '';
const BUCKET_NAME_HEADER_NAME = 'Bucket name';

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

// Route origin requests to the S3 bucket.
const setBucketNameHeader = version => fastly.setFastlyHeader(version, {
    name: BUCKET_NAME_HEADER_NAME,
    action: 'set',
    ignore_if_set: 0,
    type: 'REQUEST',
    dst: 'http.host',
    src: `"${S3_BUCKET_NAME}"`,
    priority: 1
});

// Render routes.json into VCL snippets and write them to the version.
const setAppRouteSnippets = version => Promise.all(
    routesToSnippets(routeJson).map(snippet => fastly.setSnippet(version, snippet))
);

const configureFastly = async () => {
    const version = await getWorkingVersion();
    await Promise.all([
        setBucketNameHeader(version),
        setAppRouteSnippets(version)
    ]);
    // Compile-check the generated VCL before anything tries to activate it.
    const validation = await fastly.validateVersion(version);
    if (validation.status !== 'ok') {
        throw new Error(`Version ${version} failed validation: ${validation.msg}`);
    }
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
