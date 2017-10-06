var webpackConfig = require('./webpack.test.config.js');



module.exports = function(config) {
  config.set({
    basePath: '',

    browsers: ['ChromeHeadless'],

    files: [
      {
        pattern: 'app/test.frontend.shim.js'
      },
      {
        pattern: 'app/ui/js/**/*-test.js',
        watched: false
      }
    ],

    frameworks: ['mocha'],

    logLevel: config.LOG_WARN,

    preprocessors: {
      'app/test.frontend.shim.js': ['webpack'],
      'app/ui/js/**/*-test.js': ['webpack']
    },

    singleRun: false,

    webpack: webpackConfig,

    webpackMiddleware: {
      quiet: true
    }
  });
};
