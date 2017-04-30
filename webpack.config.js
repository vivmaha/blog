var webpack = require('webpack');

const PRODUCTION = process.env.NODE_ENV === 'production';

var plugins = PRODUCTION ? [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true
    })
] : [
    new webpack.LoaderOptionsPlugin({
        debug: true
    })
];

module.exports = {
    devServer: {
        historyApiFallback: true,
    },
    devtool: 'inline-source-map',
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
    plugins: plugins.concat([
        // Workaround for https://github.com/moment/moment/issues/1435
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en$/),
    ]),
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
};