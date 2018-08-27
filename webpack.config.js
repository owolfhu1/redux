const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "../www/index.html",
    filename: "./index.html"
});

module.exports = {
    mode: 'none',
    context: path.join(__dirname, 'source'),
    entry: [
        "babel-polyfill",
        './index.js',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
        ],
    },
    plugins: [htmlPlugin],
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
};