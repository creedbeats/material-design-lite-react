var path = require('path');
var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      { test: /\.jss?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  output: {
    filename: './dist/app.js'
  },
  entry: [
    './src/index.js'
  ]
};
