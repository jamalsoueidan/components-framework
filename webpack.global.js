var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path')

/*
  We are not building these files inside our javascript file, this mean you must include those libraries in the HTML
  page, exactly same version as in package.json
*/
module.exports.externals = {
  "react" : "React",
  "react-dom": "ReactDOM",
  "redux": "Redux",
  "react-redux": "ReactRedux",
  "react-router": "ReactRouter",
  "react-router-redux": "ReactRouterRedux"
}

module.exports.loaders = [
  { test: /\.js$/,
    loader: 'babel',
    exclude: /(node_modules|lib)/ ,
    query: {
      presets: ["es2015", "react", "stage-2"],
      plugins: ["babel-plugin-add-module-exports"]
    }},
  { test: /(\.js)$/,
    loader: "eslint",
    exclude: /node_modules|lib/ },
  { test: /\.scss$/,
    loader: ExtractTextPlugin.extract("style", "css!autoprefixer!sass") },
  { test: /\.css$/,
    loader: ExtractTextPlugin.extract("style", "css") },
]

module.exports.postcss = [
  autoprefixer({browsers: ['last 2 versions']})
];

module.exports.resolve = {
  extensions: ['', '.js', '.sass'],
  root: [path.join(__dirname, 'src')]
}

module.exports.devServer = {
  historyApiFallback: true,
}
