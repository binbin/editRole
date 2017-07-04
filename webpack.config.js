var path = require('path')
var HtmlwebpackPlugin = require('html-webpack-plugin')

var ExtractTextPlugin = require("extract-text-webpack-plugin")

var ROOT_PATH = path.resolve(__dirname)
var APP_PATH = path.resolve(ROOT_PATH, 'app')
var BUILD_PATH = path.resolve(ROOT_PATH, 'build')


var TEMPLATE_PATH=path.resolve(ROOT_PATH, 'template')


var CopyWebpackPlugin = require('copy-webpack-plugin');

var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');


module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'index.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].bundle.js',
        publicPath:'http://localhost:8080/'
    },
    //enable dev source map
    // devtool: 'eval-source-map',
     // devtool: 'source-map',
     devtool: 'eval-source-map',
    devServer: {
        historyApiFalllback: true,
        // hot:false,
        inline: true,
        progress: true,
        outputPath: BUILD_PATH
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: [APP_PATH,TEMPLATE_PATH]
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
            // loader:ExtractTextPlugin.extract('style', 'css!sass?sourceMap'),
        }, {
            test: /\.css$/,
            loaders: ['style', 'css?sourceMap'],
            // loader:ExtractTextPlugin.extract('style', 'css?sourceMap'),
             // 'output-pathinfo': true
        }, 
        // {
        //     test: /\.png|\.jpe?g|\.gif|\.svg|\.woff|\.woff2|\.ttf|\.eot|\.ico|\.svg$/,
        //     loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
        // }, 
        {test: /\.png|\.jpe?g|\.gif|\.svg|\.woff|\.woff2|\.ttf|\.eot|\.ico|\.svg$/, loader: 'file?name=fonts/[name].[hash].[ext]?'},
     ]
    },
    plugins: [
    // new CopyWebpackPlugin([{
    //                     from:path.resolve(APP_PATH, 'commons'),
    //                     to:path.resolve(BUILD_PATH, 'commons'),
    //               },{
    //                     from:path.resolve(APP_PATH, 'resources'),
    //                     to:path.resolve(BUILD_PATH, 'resources'),
    //               }]),
                  // new ExtractTextPlugin("[name].css"),
                  new HtmlwebpackPlugin()],
                  resolve: {
                      extensions: [ '.js', '.jsx']
                  }
}
