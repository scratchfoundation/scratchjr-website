const Fastly = require('fastly');

/*
 * Fastly configuration helpers built on the official fastly-js client.
 *
 * Wraps the per-resource API classes and exposes Promise-returning, upsert-by-
 * name helpers with stable signatures so callers don't deal with the client's
 * create-vs-update split. Authenticates the shared ApiClient on construction.
 *
 * @param {string} apiToken Fastly API token
 * @param {string} serviceId Fastly service id
 */
module.exports = (apiToken, serviceId) => {
    Fastly.ApiClient.instance.authenticate(apiToken);

    const versionApi = new Fastly.VersionApi();
    const conditionApi = new Fastly.ConditionApi();
    const headerApi = new Fastly.HeaderApi();
    const responseObjectApi = new Fastly.ResponseObjectApi();
    const purgeApi = new Fastly.PurgeApi();

    // Upsert-by-name: fastly-js has no upsert, so update (PUT by name) and fall
    // back to create (POST) when the resource does not yet exist (404).
    const upsert = (update, create) => update().catch(err => {
        if (err && err.status === 404) return create();
        throw err;
    });

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

        // Upsert a Fastly condition entry.
        setCondition: (version, condition) => {
            if (!serviceId) {
                return Promise.reject(new Error('Failed to set condition. No serviceId configured'));
            }
            const params = withService(version, condition);
            return upsert(
                () => conditionApi.updateCondition(Object.assign({condition_name: condition.name}, params)),
                () => conditionApi.createCondition(params)
            );
        },

        // Upsert a Fastly header entry.
        setFastlyHeader: (version, header) => {
            if (!serviceId) {
                return Promise.reject(new Error('Failed to set header. No serviceId configured'));
            }
            const params = withService(version, header);
            return upsert(
                () => headerApi.updateHeaderObject(Object.assign({header_name: header.name}, params)),
                () => headerApi.createHeaderObject(params)
            );
        },

        // Upsert a Fastly response object. The client takes the body wrapped in
        // create_response_object_request for both create and update.
        setResponseObject: (version, responseObject) => {
            if (!serviceId) {
                return Promise.reject(new Error('Failed to set response object. No serviceId configured'));
            }
            return upsert(
                () => responseObjectApi.updateResponseObject(withService(version, {
                    response_object_name: responseObject.name,
                    create_response_object_request: responseObject
                })),
                () => responseObjectApi.createResponseObject(withService(version, {
                    create_response_object_request: responseObject
                }))
            );
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
