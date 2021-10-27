const path = require("path");
const webpack = require("webpack");
const copyrightBanner = require("./banner");

module.exports = {
    entry: "./source/index.js",
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: "babel-loader"
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        // path: './build',
        filename: "bundle.js"
    },
    plugins: [
        new webpack.BannerPlugin(copyrightBanner),
    ],
    // mode: process.env.NODE_ENV === "production" ? "production" : "development"
    mode: "development"
}