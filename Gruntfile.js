module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    devserver: {
      options: {
        base: 'public',
        type: 'http',
        port: 9234,
      },
      server: {}
    },
    'gh-pages': {
      options: {
        base: 'public',
        message: 'Auto-generated commit'
      },
      src: ['**']
    }
  });
  grunt.loadNpmTasks('grunt-devserver');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.registerTask('start', ['devserver']);
};
