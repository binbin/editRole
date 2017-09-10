var path = require('path')
var HtmlwebpackPlugin = require('html-webpack-plugin')

var ExtractTextPlugin = require("extract-text-webpack-plugin")

var ROOT_PATH = path.resolve(__dirname)
var APP_PATH = path.resolve(ROOT_PATH, 'app')
var BUILD_PATH = path.resolve(ROOT_PATH, 'build')


var TEMPLATE_PATH=path.resolve(ROOT_PATH, 'template')


var CopyWebpackPlugin = require('copy-webpack-plugin');

var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

var webpack = require('webpack')


module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'index.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].bundle.js',
        publicPath:'http://localhost:8080/'
        // publicPath: "/assets/"
    },
    //enable dev source map
    // devtool: 'eval-source-map',
     // devtool: 'source-map',
    // devtool: 'eval-source-map',
    
    //  devServer: {
    //     contentBase: "./build",
    // }
    devServer: {
        // hot: true,
        // inline: true,
        historyApiFallback: true,
        proxy: {
          '/sto/*': {
              target: 'http://localhost:18080/',
              secure: false
          }
        }
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: [APP_PATH,TEMPLATE_PATH]
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
            // loader:ExtractTextPlugin.extract('style', 'css!sass?sourceMap'),
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader?sourceMap'],
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
    externals:{
        'react': 'React',
        'react-dom': 'ReactDOM',
        'amazeui-touch': 'AMUITouch',
        'react-addons-css-transition-group':{root:['React', 'addons', 'CSSTransitionGroup']}
    },
    plugins: [
                new webpack.LoaderOptionsPlugin({
                    options:{
                        devServer: {
                            historyApiFalllback: true,
                            // hot:false,
                            inline: true,
                            progress: true,
                            outputPath: BUILD_PATH,
                            contentBase: "./build",
                        },
                    }
                }),
    // new CopyWebpackPlugin([{
    //                     from:path.resolve(APP_PATH, 'commons'),
    //                     to:path.resolve(BUILD_PATH, 'commons'),
    //               },{
    //                     from:path.resolve(APP_PATH, 'resources'),
    //                     to:path.resolve(BUILD_PATH, 'resources'),
    //               }]),
                  // new ExtractTextPlugin("[name].css"),
                  new HtmlwebpackPlugin({
                    'files':{
                            "css": [ "main.css" ],
                        },
                     template: './index.ejs',
                     preScripts:['https://cdn.bootcss.com/react/15.6.1/react-with-addons.min.js','https://cdn.bootcss.com/react/15.6.1/react-dom.min.js','https://npmcdn.com/amazeui-touch@1.0.0-beta.3/dist/amazeui.touch.min.js'],
                    preCss:['https://npmcdn.com/amazeui-touch@1.0.0-beta.3/dist/amazeui.touch.min.css']
                  }),
                  new webpackUglifyJsPlugin({
                    cacheFolder: path.resolve(__dirname, 'public/cached_uglify/'),
                    debug: true,
                    minimize: true,
                    sourceMap: false,
                    output: {
                      comments: false
                    },
                    compressor: {
                      warnings: false
                    }
                  })],
                  resolve: {
                      extensions: [ '.js', '.jsx']
                  }
}
