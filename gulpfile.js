const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');

gulp.task('sass', function() {
  return gulp.src('assets/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('assets/css/'))
});

gulp.task('watch', function() {
  gulp.watch('assets/scss/**/*.scss', gulp.series('sass'));
});
