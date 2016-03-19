var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var sass = require('gulp-sass');
var source = require("vinyl-source-stream");
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var rename = require('gulp-rename');
var zip = require('gulp-zip');
var replace = require('gulp-replace');
var del = require('del');

gulp.task('default', ['build']);
gulp.task('build', ['del'], function () {
  gulp.src('./src/css/**.css').pipe(gulp.dest('./build/css'));
  gulp.src('./src/index.html').pipe(gulp.dest('./build'));
  gulp.src('./src/css/*.scss')
    .pipe(sass({outputStyle: 'explanded'}))
    .pipe(gulp.dest('./build/css'))
  return browserify('./src/app.jsx')
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'))
});

gulp.task('dist', ['build'], function () {
   gulp.src('./build/js/app.js')
    .pipe(rename("app.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))

   return gulp.src('./build/index.html')
    .pipe(replace(/(src=".*(\w*))\.js/g, '$1.min.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task('del', function (callback) {
  return del(['./build'], callback);
})

gulp.task('zip', ['dist'], function () {
   return gulp.src('./build/**')
    .pipe(zip('2048.zip'))
    .pipe(gulp.dest(''));
});

gulp.task('watch', ['default'], function() {
  gulp.watch(['./src/components/*.jsx', './src/pages/*.jsx', './src/*.jsx'], ['default']);
});