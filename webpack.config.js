const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')

const buildName = 'development';

module.exports = {
  entry: path.join(__dirname, "src", buildName + '.js'),
  output: {
    filename: buildName + '.js',
    path: 'build'
  },
  externals: {
    "react" : "React",
    "react-dom": "ReactDOM",
    "redux": "Redux",
    "react-redux": "ReactRedux",
    "react-router": "ReactRouter",
    "react-router-redux": "ReactRouterRedux"
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|lib)/ },
      { test: /(\.js)$/,
        loader: "eslint",
        exclude: /node_modules|lib/ },
      { test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css!autoprefixer!sass") },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css") },
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
    new ExtractTextPlugin(buildName + '.css', { allChunks: true })
  ],
  devServer: {
    historyApiFallback: true,
  }
};
