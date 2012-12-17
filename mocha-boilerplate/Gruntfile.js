/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    jshint: {
      files: ['Gruntfile.js', 'tests/**/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          // Globals defined by RequireJS
          define: false,
          
          // Globals defined by Mocha
          suite: false,
          test: false,
          assert: false
        }
      }
    },
    
    watch: {  
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint']
      },

      tests: {
        files: ['lib/**/*.js', 'tests/**/*.js'],
        tasks: ['jshint', 'test']
      }
    },

    mocha: {
      index: [ 'runner/index.html' ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['gatherTests', 'mocha']);
  grunt.registerTask('default', ['jshint', 'test']);
};
