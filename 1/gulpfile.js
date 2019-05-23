var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./disc/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series("sass"));
});