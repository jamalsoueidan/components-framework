// http://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6
// http://moduscreate.com/optimizing-react-es6-webpack-production-build/

const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')
const path = require('path')
const argv = require('yargs').argv;
const is_production = argv.mode === "production"


let libraryName = "KAF"
let plugins =  [
                  new ExtractTextPlugin( libraryName + '.css', { allChunks: true }),
                  new webpack.optimize.DedupePlugin(),
                  new webpack.optimize.UglifyJsPlugin({ minimize: true, output: { comments: false }, compressor: { warnings: false } }),
                  new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } })
                ];

if ( is_production ) {
  libraryName = "application";
}

module.exports = {
  entry: path.join(__dirname, "src", "build.js"),
  output: {
    path: 'public',
    filename: libraryName + ".js",
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
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
  plugins: plugins,
  devServer: {
    historyApiFallback: true,
  }
};
