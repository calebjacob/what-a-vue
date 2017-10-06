const config = require('./webpack.base.config.js');
const webpack = require('webpack');



config.devtool = 'eval-source-map';

config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: '"production"'
  }
}));



module.exports = config;
