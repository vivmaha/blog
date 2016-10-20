module.exports = {
    entry: "./src/index.tsx",
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.scss$/, loaders:["style", "css", "sass"] },
        ],
    },
    output: {
        filename: "./dist/bundle.js",
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
};