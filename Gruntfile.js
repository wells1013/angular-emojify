module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          keepalive: true,
          port: 9001
        }
      }
    },
    uglify: {
      options: {
        banner: '/**\n' +
                ' * <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("mm/dd/yyyy") %>\n' +
                ' * <%= pkg.description %>\n' +
                ' * <%= pkg.homepage %>\n' +
                ' * Licensed <%= pkg.license %>\n' +
                ' */\n'
      },
      build: {
        src: 'angular-emojify.js',
        dest: 'angular-emojify.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('dev', ['connect']);
}
