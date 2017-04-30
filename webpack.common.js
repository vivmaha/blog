var webpack = require('webpack');

module.exports = {
    devServer: {
        historyApiFallback: true,
    },
    entry: "./src/index.tsx",    
    module: {
        rules: [     
            {
                enforce: 'pre',
                test: /\.js$/,
                use: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: "source-map-loader"
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            },
            {
                test: /\.scss$/, 
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    output: {
        filename: "./bundle.js",
    },
    plugins: [
        // Workaround for https://github.com/moment/moment/issues/1435
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en$/),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
};