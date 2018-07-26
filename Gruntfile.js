module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-eslint');
    grunt.initConfig({
        eslint: {
            target: [
                './*.js',
                './*.jsx',
                './!(node_modules|public)/**/*.js',
                './!(node_modules|public)/**/*.jsx'
            ]
        }
    });
    grunt.registerTask('test', ['eslint']);
};