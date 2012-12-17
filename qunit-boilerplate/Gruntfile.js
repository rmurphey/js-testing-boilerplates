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

          // Globals defined by QUnit
          module: false,
          test: false,
          ok: false
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
    
    qunit: {
      all: 'runner/**/*.html'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['gatherTests', 'qunit']);
  grunt.registerTask('default', ['jshint', 'test']);

};