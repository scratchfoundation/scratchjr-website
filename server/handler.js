var fs = require('fs');
var mustache = require('mustache');
var path = require('path');

/**
 * Constructor
 */
function Handler (route) {

    // Render template
    var location = path.resolve(__dirname, '../src/template.html');
    var template = fs.readFileSync(location, 'utf8');
    var output = mustache.render(template, route);

    return function (req, res) {
        res.set({
            'Content-Type': 'text/html',
            'Cache-Control': 'public, max-age=31536000'
        });
        res.send(output);
    };
}

/**
 * Export a new instance
 */
module.exports = function (route) {
    return new Handler(route);
};
