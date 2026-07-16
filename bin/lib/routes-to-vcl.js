/*
 * Turn routes.json into Fastly VCL snippets.
 *
 * Instead of creating one Fastly condition + response object + header per route
 * (which accumulates objects and burns a synthetic status code per redirect),
 * the whole route table is rendered into a few snippets that are overwritten by
 * name on every run. Exact redirects and section rewrites become table lookups;
 * a single reused internal status code drives every 301.
 *
 * Returns an array of snippet specs: {name, type, priority, content}.
 */

// Internal-only status used to signal "issue a redirect": caught in the error
// snippet and turned into a 301, never returned to a client. Any value >= 600
// works as long as it does not collide with another error code in the service's
// VCL; the value is arbitrary. Verify against the live generated VCL if unsure.
const REDIRECT_STATUS = 700;

// Escape a string for use inside a VCL double-quoted literal.
const vclString = value => `"${String(value).replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')}"`;

// Derive the literal source path a redirect route matches, from its pattern.
// Redirect patterns are anchored literal paths (e.g. "^/about\\.html"); strip
// the anchors and unescape. Throws if the pattern isn't a literal path, so a
// regex redirect can never be silently dropped into an exact-match table.
const redirectSourcePath = route => {
    const body = route.pattern.replace(/^\^/, '').replace(/\$$/, '');
    const unescaped = body.replace(/\\(.)/g, '$1');
    // After unescaping, a literal path re-escaped must match the original body.
    const reEscaped = unescaped.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (reEscaped !== body) {
        throw new Error(`Redirect pattern is not a literal path, cannot map to a lookup table: ${route.pattern}`);
    }
    return unescaped;
};

// The first path segment a section route keys on (its name is that segment).
const sectionKey = route => route.name;

const renderTable = (name, entries) => {
    const lines = entries.map(([key, value]) => `    ${vclString(key)}: ${vclString(value)},`);
    return `table ${name} {\n${lines.join('\n')}\n}`;
};

const routesToSnippets = routes => {
    const redirectEntries = [];
    const sectionEntries = [];

    routes.forEach(route => {
        if (route.redirect) {
            redirectEntries.push([redirectSourcePath(route), route.redirect]);
            return;
        }
        if (route.name === 'index') return; // handled explicitly in recv
        sectionEntries.push([sectionKey(route), `/${route.name}.html`]);
    });

    const tables = [
        renderTable('redirects', redirectEntries),
        renderTable('sections', sectionEntries)
    ].join('\n\n');

    const recv = [
        '# Redirect legacy .html paths to their clean URL (single reused status).',
        'declare local var.redirect STRING;',
        'set var.redirect = table.lookup(redirects, req.url.path, "");',
        'if (var.redirect != "") {',
        '    set req.http.X-Redirect-Location = var.redirect;',
        `    error ${REDIRECT_STATUS};`,
        '}',
        '',
        '# Serve section pages by rewriting to their static html file.',
        'if (req.url.path == "/") {',
        '    set req.url = "/index.html";',
        '} else {',
        '    declare local var.section STRING;',
        '    set var.section = regsub(req.url.path, "^/([^/?]+).*$", "\\1");',
        '    declare local var.view STRING;',
        '    set var.view = table.lookup(sections, var.section, "");',
        '    if (var.view != "") {',
        '        set req.url = var.view;',
        '    }',
        '}'
    ].join('\n');

    const error = [
        `if (obj.status == ${REDIRECT_STATUS}) {`,
        '    set obj.status = 301;',
        '    set obj.response = "Moved Permanently";',
        '    set obj.http.Location = req.http.X-Redirect-Location;',
        '    synthetic {""};',
        '    return(deliver);',
        '}'
    ].join('\n');

    return [
        {name: 'app-routes-tables', type: 'init', priority: '100', content: tables},
        {name: 'app-routes-recv', type: 'recv', priority: '10', content: recv},
        {name: 'app-routes-error', type: 'error', priority: '100', content: error}
    ];
};

module.exports = {routesToSnippets, redirectSourcePath, REDIRECT_STATUS};
