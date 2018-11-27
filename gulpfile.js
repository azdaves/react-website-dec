'use strict';

// dependencies
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    changed = require('gulp-changed'),

// SCSS / CSS

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

//compile scss

gulp.task('compile_scss', function() {

  gulp.src(SCSS_SRC)
  .pipe(sass().on('error', sass.logError))
  .pipe(minifycss())
  .pipe(rename({ suffix: '.min' }))
  .pipe(changed('SCSS_DEST'))
  .pipe(gulp.dest('SCSS_DEST'))

 
});


// detect the changes in SCSS

gulp.task('watch_scss', function() {
  gulp.watch(SCSS_SRC, ['compile_scss']);

});

//run tasks
gulp.task('default', ['watch_scss']);