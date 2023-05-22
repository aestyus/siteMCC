var gulp = require('gulp');
var gutil = require('gulp-util');
var $ = require('gulp-load-plugins')();

gulp.task('responsive', function() {
  return gulp.src(['images/**/*.{webp}'])
    .pipe($.cached('responsive'))
    .pipe($.responsive({
      '**/*': [{
        // width: 1920,
        height: 40,
        quality: 80,
        progressive: true
      }]
    }));
});

gulp.task('single', function() {
    return gulp.src(['images/logo-plus-simple.png'])
      .pipe($.cached('responsive'))
      .pipe($.responsive({
        '**/*': [{
          // width: 1920,
          height: 40,
          quality: 80,
          progressive: true
        }]
      }));
  });
