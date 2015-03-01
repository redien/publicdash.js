
// publicdash.js - Javascript functional utilities in the public domain.
// Written in 2015 by Jesper Oskarsson jesosk@gmail.com
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain worldwide.
// This software is distributed without any warranty.
//
// You should have received a copy of the CC0 Public Domain Dedication along with this software.
// If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '\n\
// publicdash.js - Javascript functional utilities in the public domain.\n\
// Written in 2015 by Jesper Oskarsson jesosk@gmail.com\n\
//\n\
// To the extent possible under law, the author(s) have dedicated all copyright\n\
// and related and neighboring rights to this software to the public domain worldwide.\n\
// This software is distributed without any warranty.\n\
//\n\
// You should have received a copy of the CC0 Public Domain Dedication along with this software.\n\
// If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.\n\n\
'
            },
            build: {
                src: 'source/publicdash.js',
                dest: 'publicdash.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};