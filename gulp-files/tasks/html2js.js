var ngHtml2Js = require("gulp-ng-html2js");
var gulp = require('gulp');
var config = require('../config.js');
var minifyHtml = require("gulp-minify-html");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

gulp.task('html2js', function() {
  return gulp.src(config.templates.src)
              .pipe(minifyHtml({
                empty: true,
                spare: true,
                quotes: true
              }))
              .pipe(ngHtml2Js({
                moduleName: "partials"
              }))
              .pipe(concat("partials.min.js"))
              .pipe(uglify())
              .pipe(gulp.dest("./dist/partials"));
});

