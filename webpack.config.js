var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'initialization.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  }
};
