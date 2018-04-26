const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const Helmet = require("react-helmet");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
  // Tell webpack the root file of our
  // server application
  entry: './src/client/client.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};

externals: ['react-helmet']

module.exports = merge(baseConfig, config);
