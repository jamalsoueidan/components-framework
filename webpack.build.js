// http://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6
// http://moduscreate.com/optimizing-react-es6-webpack-production-build/

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack')
var path = require('path')
var argv = require('yargs').argv;
var options = require('./webpack.global.js')

var libraryName = "KAF"
if ( argv.mode === "production" ) {
  libraryName = "application";
}

module.exports = {
  entry: path.join(__dirname, "src", "build.js"),
  output: {
    path: 'build',
    filename: libraryName + ".js",
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: options.externals,
  module: {
    loaders: options.loaders
  },
  postcss: options.postcss,
  resolve: options.resolve,
  plugins: [
            new ExtractTextPlugin( libraryName + '.css', { allChunks: true }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({ minimize: true, output: { comments: false }, compressor: { warnings: false } }),
            new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } })
  ],
  sassLoader: options.sassLoader,
  devServer: options.devServer
};
