module.exports = function(config) {
    config.set({

        basePath: '.',
        frameworks: ['browserify', 'jasmine'],

        files: [
            'node_modules/phaser/build/phaser.min.js',
            'src/**/*.js',
            'test/**/*.js'
        ],

        exclude: [
        ],

        // logLevel: 'LOG_DEBUG',

        preprocessors: {
          'test/**/*.js': ['browserify']
        },

        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/**/*.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        },

        // define reporters, port, logLevel, browsers etc.
    });
};
