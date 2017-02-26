var webpackFailPlugin = require('webpack-fail-plugin');
var webpack = require('webpack');
var webpackBundleAnalyzer = require('webpack-bundle-analyzer')

const PRODUCTION = process.env.NODE_ENV === 'production';

var plugins = PRODUCTION ? [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
] : [
    // Workaround for https://github.com/webpack/webpack/issues/708
    webpackFailPlugin
]

module.exports = {
    devServer: {
        historyApiFallback: true,
    },
    entry: "./src/index.tsx",    
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.scss$/, loaders:["style", "css", "sass"] },
        ],
    },
    output: {
        filename: "./bundle.js",
    },
    plugins: plugins,
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
};