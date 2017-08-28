const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// PostCss
const autoprefixer = require('autoprefixer');
const postcssVars = require('postcss-simple-vars');

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
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, 'src'),
            options: {
                plugins: ["transform-object-rest-spread"],
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: function () {
                        return [
                            postcssVars,
                            autoprefixer({
                                browsers: ['last 3 versions', 'Safari >= 8', 'iOS >= 8']
                            })
                        ];
                    }
                }
            }]
        },
        {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }]
        },
        {
            test: /\.(png|PNG|jpg|JPG|gif|GIF|eot|svg|ttf|woff)$/,
            loader: 'url-loader'
        },
        {
            test: /\.html$/,
            loader: 'html-loader'
        },
        {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }
        ]
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
