import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import gulpLess from 'gulp-less';

const sass = gulpSass(dartSass);
const less = gulpLess();

gulp.task('sass', function (cb) {
  gulp
    .src('*.scss')
    .pipe(sass())
    .pipe(gulp.dest((f) => f.base));
  cb();
});

gulp.task('less', function (cb) {
  gulp
    .src('*.less')
    .pipe(less)
    .pipe(gulp.dest((f) => f.base));
  cb();
});

gulp.task(
  'default',
  gulp.series('sass', 'less', function (cb) {
    gulp.watch('*.scss', gulp.series('sass'));
    gulp.watch('*.less', gulp.series('less'));
    cb();
  })
);

// gulp.task(
//   'default',
//   gulp.series('sass', function (cb) {
//     gulp.watch('*.scss', gulp.series('sass'));
//     cb();
//   })
// );
