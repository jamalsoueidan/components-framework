// https://julienrenaux.fr/2015/03/30/introduction-to-webpack-with-practical-examples/
//
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path')
var argv = require('yargs').argv;

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

// npm run build -- --externals=none
if ( argv.externals !== "none" ) {
  module.exports.externals = [];
}

module.exports.loaders = [
  {
    test: /\.js$/,
    loader: 'babel',
    exclude: /(node_modules)/ ,
    query: {
      presets: ["es2015", "react", "stage-2"],
      plugins: ["babel-plugin-add-module-exports", "babel-plugin-transform-es2015-classes"]
    }
  }, {
    test: /(\.js)$/,
    loader: "eslint",
    exclude: /node_modules/
  }, {
    test: /(\.scss|\.css)$/,
    loader: ExtractTextPlugin.extract("style", "css?sourceMap!autoprefixer!sass?sourceMap")
  }, {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: ['url?limit=8192', 'img']
  }
]

module.exports.postcss = [
  autoprefixer({browsers: ['last 2 versions']})
];

/*https://shellmonger.com/2016/01/19/adding-sass-support-to-webpack/*/
module.exports.sassLoader =  {
  includePaths: [ 'theme' ]
}

// Extensions
// You can now require('file') instead of require('file.js')
//
// Root
// http://moduscreate.com/es6-es2015-import-no-relative-path-webpack/

module.exports.resolve = {
  extensions: ['', '.js', '.sass'],
  root: [
    path.resolve('./library'),
    path.resolve('./library/core'),
    path.resolve('./library/components')
  ],
  modules: [
     path.resolve('./library'),
   ]
}

module.exports.devServer = {
  historyApiFallback: true,
}
