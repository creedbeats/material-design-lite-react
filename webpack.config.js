var path = require('path');
var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  externals: {
    react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
    },
    'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
    }
  },
  output: {
    filename: './index.js',
    // library: 'mdl',
    libraryTarget: 'commonjs2'
  },
  entry: [
    './src/index.js'
  ]
};
