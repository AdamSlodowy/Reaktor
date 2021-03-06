const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
    // Entry points to the project
    entry: [
        'webpack/hot/dev-server',
        'webpack/hot/only-dev-server',
        path.join(__dirname, './todoApp.js')
    ],
    // Server Configuration options
    devServer: {
        historyApiFallback: true, // Delegate route handlling to react-router. Webpack-dev-server will always provide entry now. https://stackoverflow.com/questions/40332753/react-webpack-dev-server-cannot-get
        contentBase: './www', // Relative directory for base of server
        hot: true, // Live-reload
        inline: true,
        port: 3000, // Port Number
        host: 'localhost', // Change to '0.0.0.0' for external facing server
    },
    devtool: 'cheap-module-source-map',
    output: {
        path: buildPath, // Path of output file
        filename: 'app_output.js',
    },
    plugins: [
        // Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),
        // Allows error warnings but does not stop compiling.
        new webpack.NoErrorsPlugin(),
        // Moves files
        new TransferWebpackPlugin([
            {from: 'www'},
        ], path.resolve(__dirname, './')),
    ],
    module: {
        loaders: [
            {
                // React-hot loader and
                test: /\.js?$/, // All .js and .jsx files
                loaders: ['react-hot', 'babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
                exclude: [nodeModulesPath],
            },
        ],
    },
};

module.exports = config;
