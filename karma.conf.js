var webpack = require('webpack');
const Merge = require('webpack-merge');
const TestConfig = require('./webpack.test');

module.exports = function (config) {
  config.set({
    browsers: [ process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome' ],
    singleRun: true,
    frameworks: [ 'mocha' ],
    files: [
      '**/*test.tsx'
    ],
    preprocessors: {
      '**/*.tsx': [ 'webpack', 'sourcemap' ],
    },
    reporters: [ 'dots' ],
    webpack: TestConfig,
    webpackServer: {
      noInfo: true
    }
  });
};