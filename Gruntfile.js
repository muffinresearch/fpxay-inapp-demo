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
  });
  grunt.loadNpmTasks('grunt-devserver');
  grunt.registerTask('start', ['devserver']);
};
