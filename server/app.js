var express = require('express');
//var path = require('path');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');

var compiler = webpack(require('../webpack.config.js'));
var handler = require('./handler');
var routes = require('../src/routes.json');

// Create server
var app = express();

// Bind routes
for (var routeId in routes) {
	(function(route) {
		app.get(route.pattern, handler(route));
		app.get(route.pattern + '.html', function (req, res) {
			res.redirect(route.pattern);
		});
	})(routes[routeId]);
}


app.use(webpackDevMiddleware(compiler, {
    headers: {
        'X-From-Webpack': true
    }
}));

var port = 8333;
app.listen(port, function() {
	process.stdout.write("Listening on port " + port);
});
