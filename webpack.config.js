var failPlugin = require('webpack-fail-plugin');

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
    plugins: [
        // Workaround for https://github.com/webpack/webpack/issues/708
        failPlugin,
    ],
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
};