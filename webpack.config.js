var ExtractTextPlugin = require('extract-text-webpack-plugin');
var options = require('./webpack.global.js')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var buildName = 'application';

options.plugins = [
  new ExtractTextPlugin(buildName + '.css', { allChunks: true }),
  new HtmlWebpackPlugin({
     template: './src/assets/template.html',
     title: "Application"
  })
]

module.exports = {
  entry: path.join(__dirname, "src", buildName + ".js"),
  output: {
    filename: buildName + '.js',
    path: 'dist'
  },
  watch: true,
  debug: true,
  externals: options.externals,
  module: { loaders: options.loaders },
  postcss: options.postcss,
  resolve: options.resolve,
  plugins: options.plugins,
  sassLoader: options.sassLoader,
  devServer: options.devServer
}
