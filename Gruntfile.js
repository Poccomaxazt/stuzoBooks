module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'js/lib/angular.min.js',
                    'js/lib/angular-route.min.js',
                    'js/lib/angular-local-storage.min.js',
                    'js/lib/ui-bootstrap-0.13.3.min.js',
                    'js/lib/ui-bootstrap-tpls-0.13.3.min.js',
                    'js/app.js',
                    'js/controllers/*.js',
                    'js/factories/*.js'
                ],
                dest: 'dist/js/script.js'
            }
        },

        uglify: {
            build: {
                src: 'dist/js/script.js',
                dest: 'dist/js/script.min.js'
            }
        },

        cssmin: {
            target: {
                files: {
                    'dist/css/style.min.css': ['css/*.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};