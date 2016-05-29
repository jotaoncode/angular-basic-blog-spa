var istanbul = require('browserify-istanbul');

module.exports = function(config) {
  config.set({
    //logLevel: 'LOG_DEBUG',

    reporters: [
      'spec',
      'coverage'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun : true,

    autoWatch : false,

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    port: 9876,

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'mocha',
      'browserify',
      'fixture'
    ],

    files: [{
        pattern:  './test/**/*.fixture.html'
      },
      'src/js/vendors.js',
      'src/**/*.js',
      'dist/css/app.css',
      'test/**/*.js'
    ],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html'},
        { type: 'text'},
        { type: 'lcov', subdir: 'lcov/'}
      ],
      instrumenterOptions: {
        istanbul: {
          noCompact: true
        }
      },
      instrumenter: {
        'test/**/*.js': 'istanbul'
      },
      includeAllSources: true
    },

    // list of files to exclude
    exclude: [],

    preprocessors: {
      'src/**/*.js': ['browserify',
        //'coverage'
      ],
      'test/**/*.js': ['browserify'],
      'test/**/*.fixture.html': ['html2js']
    },


    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS2'//, 'Firefox'
    ],

    // using browserify-istanbul as suggested by
    // https://github.com/karma-runner/karma-coverage/issues/16
    browserify: {
      debug: true,
      extensions: [".js", ".hbs"],
      transform: [['hbsfy', {"extensions": "hbs"}], 'brfs', istanbul({
        ignore: ['**/node_modules/**', '**/test/**']
      })]
    }
  });
};
