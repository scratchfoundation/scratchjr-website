const Fastly = require('fastly');

/*
 * Fastly configuration helpers built on the official fastly-js client.
 *
 * Wraps the per-resource API classes and exposes Promise-returning helpers with
 * stable signatures. Authenticates the shared ApiClient on construction.
 *
 * @param {string} apiToken Fastly API token
 * @param {string} serviceId Fastly service id
 */
module.exports = (apiToken, serviceId) => {
    Fastly.ApiClient.instance.authenticate(apiToken);

    const versionApi = new Fastly.VersionApi();
    const snippetApi = new Fastly.SnippetApi();
    const purgeApi = new Fastly.PurgeApi();

    const ignoreMissing = err => {
        if (err && err.status === 404) return null;
        throw err;
    };

    const withService = (version, extra) => Object.assign(
        {service_id: serviceId, version_id: version},
        extra
    );

    return {
        serviceId: serviceId,

        // Get the most recent version for the service.
        getLatestVersion: () => {
            if (!serviceId) {
                return Promise.reject(new Error('Failed to get latest version. No serviceId configured'));
            }
            return versionApi.listServiceVersions({service_id: serviceId})
                .then(versions => versions.reduce((latest, version) => {
                    if (!latest) return version;
                    if (version.number > latest.number) return version;
                    return latest;
                }));
        },

        // Clone a version to create a new, editable version.
        cloneVersion: version => {
            if (!serviceId) {
                return Promise.reject(new Error('Failed to clone version. No serviceId configured.'));
            }
            return versionApi.cloneServiceVersion({service_id: serviceId, version_id: version});
        },

        // Compile-check a version's generated VCL without activating it. Resolves
        // with {status, msg}; status is 'ok' when the version is valid.
        validateVersion: version => {
            if (!serviceId) {
                return Promise.reject(new Error('Failed to validate version. No serviceId configured.'));
            }
            return versionApi.validateServiceVersion({service_id: serviceId, version_id: version});
        },

        // Replace a versioned VCL snippet. fastly-js updateSnippet sends no body,
        // so delete any existing snippet of this name (ignoring 404) then create.
        setSnippet: (version, snippet) => {
            if (!serviceId) {
                return Promise.reject(new Error('Failed to set snippet. No serviceId configured'));
            }
            return snippetApi.deleteSnippet({service_id: serviceId, version_id: version, name: snippet.name})
                .catch(ignoreMissing)
                .then(() => snippetApi.createSnippet(withService(version, {
                    name: snippet.name,
                    type: snippet.type,
                    content: snippet.content,
                    priority: snippet.priority,
                    dynamic: '0'
                })));
        },

        // Activate a version.
        activateVersion: version => {
            if (!serviceId) {
                return Promise.reject(new Error('Failed to activate version. No serviceId configured.'));
            }
            return versionApi.activateServiceVersion({service_id: serviceId, version_id: version});
        },

        // Purge all content for a service.
        purgeAll: servId => purgeApi.purgeAll({service_id: servId})
    };
};
