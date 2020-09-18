const sass = require('node-sass');
const harp = require('./harp.json');

module.exports = (grunt) => {
  const config = {
    // Clean folders =================================
    clean: {
      www: ['www']
    },
    // ENV vars ======================================
    env: {
      dev: {
        NODE_ENV: 'development'
      },
      prod: {
        NODE_ENV: 'production'
      }
    },
    // Stylus ========================================
    sass: {
      main: {
        options: { outputStyle: 'compressed', implementation: sass },
        files: {
          'public/css/main.css': 'public/css/main.scss'
        }
      }
    },
    // Compress ======================================
    compress: {
      main: {
        options: {
          mode: 'gzip',
          level: 9,
          pretty: true
        },
        files: [
          { expand: true, flatten: true, src: ['www/js/*.js'], dest: 'www/js', ext: '.gz.js' },
          { expand: true, flatten: true, src: ['www/css/*.css'], dest: 'www/css', ext: '.gz.css' }
        ]
      }
    },
    // Image Optim ===================================
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'public/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public/images'
        }]
      }
    },
    // Github Pages ==================================
    'gh-pages': {
      options: {
        base: 'www',
        repo: harp.globals.github_repo,
        message: `Deploying ${harp.globals.title}`,
        branch: 'master'
      },
      src: '**/*'
    }
  };

  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  
  grunt.registerTask('prebuild:dev', ['clean', 'env:dev', 'sass', 'imagemin']);
  grunt.registerTask('prebuild:prod', ['clean', 'env:prod', 'sass', 'imagemin']);
  grunt.registerTask('build:prod', ['compress']);
  grunt.registerTask('deploy:prod', ['gh-pages', 'clean']);
};
