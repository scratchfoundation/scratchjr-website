const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const routes = require('./src/routes.json');
const TemplateConfig = require('./src/template-config.js');

// Prepare all entry points
const entry = {
    // common: [
    //     // Vendor
    //     'react',
    //     'react-dom'
    // ]
};
routes.forEach(route => {
    if (!route.redirect) {
        entry[route.name] = `./src/views/${route.name}/${route.name}.jsx`;
    }
});

module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, 'src'),
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            loader: 'style!css!postcss-loader!sass'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.css$/,
            loader: 'style!css!postcss-loader'
        }, {
            test: /\.(png|jpg|gif|eot|svg|ttf|woff)$/,
            loader: 'url-loader'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: 'static'
        }])
    ].concat(routes
        .filter(route => !route.redirect)
        .map(route => new HtmlWebpackPlugin(Object.assign({}, TemplateConfig, {
            title: route.title,
            filename: `${route.name}.html`,
            route: route
        })))
    )
};
