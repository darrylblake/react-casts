var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

// Default is immediately run
gulp.task('default', function() {
  // Go into src directory and load everything
  return gulp.src('src/**')
    .pipe(react())
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./'))
});