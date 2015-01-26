module.exports = function(config) {
  config.set({
    basePath: './',
    files: [
      'src/**/*.js'
    ],
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-nested-reporter'
    ],
    autoWatch: true,
    singleRun: false,
    reporters: ['progress'],
    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};