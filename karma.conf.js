var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};
webpackConfig.devtool = 'inline-source-map';

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['mocha'],

    files: [
      'tests/*-test.js',
      'tests/**/*-test.js'
    ],

    preprocessors: {
      'tests/*-test.js': ['webpack', 'sourcemap'],
      'tests/**/*-test.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
};
