'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        connect: {
            test: {
                middleware: function (connect) {
                    return [
                        mountFolder(connect, 'app')
                    ];
                },
                options: {
                    port: 8000,
                    hostname: "0.0.0.0",
                    base: ".." // make inline with Webstorm
                }
            }
        },

        watch: {
            files: ['test/spec/**/*.js', 'app/js/**/*.js', 'test/SpecRunner.js'],
            tasks: 'exec'
        },

        exec: {
            jasmine: {
                command: 'phantomjs test/lib/run-jasmine.js http://127.0.0.1:8000/comments/test',
                stdout: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['connect:test', 'exec', 'watch']);

}

