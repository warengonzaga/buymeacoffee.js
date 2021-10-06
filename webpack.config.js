const path = require("path");

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
    // mode: process.env.NODE_ENV === "production" ? "production" : "development"
    mode: "development"
}