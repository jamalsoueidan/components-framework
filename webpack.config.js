const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')

const buildName = 'development';

module.exports = {
  entry: path.join(__dirname, "src", buildName + '.js'),
  output: {
    filename: buildName + '.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/build'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|lib)/ },
      { test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader") },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
    ]
  },
  postcss: [
    autoprefixer({browsers: ['last 2 versions']})
  ],
  resolve: {
    extensions: ['', '.js', '.sass'],
    root: [path.join(__dirname, 'src')]
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  devServer: {
    historyApiFallback: true,
  }
};
