const path = require("path");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "webSrc", "index.js")
    },
    output: {
        path: path.resolve(__dirname, "wwwroot", "webBuild")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
};