var ExtractTextPlugin = require('extract-text-webpack-plugin');
var options = require('./webpack.global.js')
var path = require('path')

var buildName = 'development';

module.exports = {
  entry: path.join(__dirname, "src", buildName + ".js"),
  output: {
    filename: buildName + '.js',
    path: 'build'
  },
  externals: options.externals,
  module: {
    loaders: options.loaders
  },
  postcss: options.postcss,
  resolve: options.resolve,
  plugins: [
    new ExtractTextPlugin(buildName + '.css', { allChunks: true })
  ],
  devServer: options.devServer
}
