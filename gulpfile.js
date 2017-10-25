const gulp = require('gulp');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');


gulp.task('js', () => {
    gulp.src('src/js/**/*.*')
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('html', () => {
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/js/**/*.*', ['js']);
});

gulp.task('default', ['html', 'js', 'watch', 'browserSync']);

