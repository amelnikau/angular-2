module.exports = function (config) {
    config.set({
        testRunner: 'karma',
        testFramework: 'jasmine',
        karmaConfigFile: 'karma.conf.js',
        mutate: [
            'app/core/**/*.service.js'
        ]
    });
};