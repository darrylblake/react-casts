var gulp = require('gulp'); // Responsible for the build process
var gutil = require('gulp-util'); // Responsible for console logging out build process, debugging
var source = require('vinyl-source-stream'); // 
var browserify = require('browserify'); // Make sure load order is done correctly
var watchify = require('watchify'); // Automatically rerun gulp when code changes
var reactify = require('reactify'); // In conjunction with browserify.
var uglify = require('gulp-uglify');


gulp.task('default', function() {
  // bundler is the object that executes the build
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserfy Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };
  build();
  bundler.on('update', build);
});

gulp.task('compress', function() {
  return gulp.src('main.js')
    .pipe(uglify())
    .pipe(gulp.dest('./'));
})