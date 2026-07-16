const assert = require('assert');
const {routesToSnippets, redirectSourcePath, REDIRECT_STATUS} = require('../bin/lib/routes-to-vcl');

// A small fixture covering each route shape: index, an exact redirect, a prefix
// (renamed-section) redirect, a prefix section, an exact section, and a section
// with no redirect pair.
const routes = [
    {pattern: '^/$', name: 'index', title: 'Home'},
    {pattern: '^/about\\.html', name: 'about-redirect', redirect: '/about'},
    {pattern: '^/about(/.+)*/?', name: 'about', title: 'About'},
    {pattern: '^/learn', name: 'learn-path-redirect', redirect: '/explore', prefix: true},
    {pattern: '^/research/?$', name: 'research', title: 'Research'},
    {pattern: '^/hoc/?$', name: 'hoc', title: 'Hour of Code'}
];

const snippets = routesToSnippets(routes);
const byName = Object.fromEntries(snippets.map(s => [s.name, s]));

assert.strictEqual(snippets.length, 3, 'produces exactly three snippets');
assert.deepStrictEqual(
    snippets.map(s => s.type).sort(),
    ['error', 'init', 'recv'],
    'snippet types are init, recv, error'
);

// Tables (init snippet).
const tables = byName['app-routes-tables'];
assert.strictEqual(tables.type, 'init');
assert.ok(tables.content.includes('"/about.html": "/about"'), 'redirects table maps source to clean url');
assert.ok(tables.content.includes('"about": "/about.html"'), 'sections table maps segment to view');
assert.ok(tables.content.includes('"research": "/research.html"'), 'exact section is in sections table');
assert.ok(tables.content.includes('"hoc": "/hoc.html"'), 'section without a redirect is still in sections');
assert.ok(!tables.content.includes('index'), 'index is not put in a table');
assert.ok(!tables.content.includes('about-redirect'), 'redirect route name is not leaked into a table');

// Recv snippet.
const recv = byName['app-routes-recv'];
assert.strictEqual(recv.type, 'recv');
assert.ok(recv.content.includes('table.lookup(redirects, req.url.path'), 'recv looks up the redirects table');
assert.ok(recv.content.includes('table.lookup(sections, var.section'), 'recv looks up the sections table');
assert.ok(recv.content.includes(`error ${REDIRECT_STATUS}`), 'recv raises the redirect sentinel');
assert.ok(recv.content.includes('set req.url = "/index.html"'), 'recv handles the root path');

// A prefix (renamed-section) redirect renders as a regsub in recv, not an exact
// table row, so the old path and all its sub-paths move to the new path.
assert.ok(!tables.content.includes('"/learn"'), 'prefix redirect source is not an exact table row');
assert.ok(
    recv.content.includes('req.url.path ~ "^/learn(/.*)?$"'),
    'recv matches the renamed prefix and its sub-paths'
);
assert.ok(
    recv.content.includes('regsub(req.url.path, "^/learn", "/explore")'),
    'recv rewrites the old prefix to the new path, preserving the rest'
);

// Error snippet.
const error = byName['app-routes-error'];
assert.strictEqual(error.type, 'error');
assert.ok(error.content.includes(`obj.status == ${REDIRECT_STATUS}`), 'error catches the redirect sentinel');
assert.ok(error.content.includes('set obj.status = 301'), 'error converts to a 301');
assert.ok(error.content.includes('set obj.http.Location = req.http.X-Redirect-Location'), 'error sets Location');

// redirectSourcePath derives literal paths and rejects real regexes.
assert.strictEqual(redirectSourcePath({pattern: '^/about\\.html'}), '/about.html');
assert.strictEqual(redirectSourcePath({pattern: '^/eula\\.html$'}), '/eula.html');
// A prefix redirect uses a bare path (no .html) as its source.
assert.strictEqual(redirectSourcePath({pattern: '^/learn'}), '/learn');
assert.throws(
    () => redirectSourcePath({pattern: '^/projects/(\\d+)'}),
    /not a literal path/,
    'a regex redirect pattern is rejected rather than silently mishandled'
);

process.stdout.write('routes-to-vcl: all assertions passed\n');
