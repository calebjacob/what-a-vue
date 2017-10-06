const config = require('./webpack.base.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');



config.devtool = 'cheap-source-map';

config.plugins.push(new UglifyJSPlugin());
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: '"production"'
  }
}));



module.exports = config;
