const gulp = require('gulp'),
    browserSync = require('browser-sync');


gulp.task('browserSync', () => {
    browserSync.create();

    browserSync.init({
        server: {
            baseDir: 'dist'
        },
        files: [
            'dist/**/*.*'
        ]
    });
});

gulp.task('js', () => {
    gulp.src('src/**/*.js')
        .pipe(gulp.dest('./dist'));
});

gulp.task('html', () => {
    gulp.src('src/**.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/**/*.js', ['js']);
});

gulp.task('default', ['html', 'js', 'watch', 'browserSync']);

