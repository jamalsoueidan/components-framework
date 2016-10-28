var ExtractTextPlugin = require('extract-text-webpack-plugin');
var options = require('./webpack.global.js')
var path = require('path')

var buildName = 'development';

module.exports = {
  entry: path.join(__dirname, "src", buildName + ".js"),
  output: {
    filename: buildName + '.js',
    path: 'public'
  },
  externals: options.externals,
  module: {
    loaders: options.loaders
  },
  postcss: options.postcss,
  resolve: options.resolve,
  watch: true,
  debug: true,
  plugins: [
    new ExtractTextPlugin(buildName + '.css', { allChunks: true })
  ],
  sassLoader: options.sassLoader,
  devServer: options.devServer
}
