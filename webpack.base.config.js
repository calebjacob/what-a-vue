const package = require('./package.json');
const path = require('path');



module.exports = {
  devtool: 'eval',

  entry: './app/ui/js/index.js',

  output: {
    filename: `scripts-${package.version}.js`,
    path: path.resolve(__dirname, 'app/public/dist')
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'vue-router$': 'vue-router/dist/vue-router.common.js'
    },
    modules: [path.resolve(__dirname, 'app/ui/js'), 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },

  plugins: []
};
