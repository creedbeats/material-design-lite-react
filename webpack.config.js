var path = require('path');
var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  output: {
    filename: './index.js'
  },
  entry: [
    './src/index.js'
  ]
};
