	const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
	STYLES_SRC = './sass',
    STYLES_DEST = './css';

// Compile & build 'css', using SASS source
gulp.task('styles', () => {
    let styles = gulp.src(`${STYLES_SRC}/page.scss`)
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(gulp.dest(STYLES_DEST));
});

// Add styles watcher
gulp.task('styles:w', ['styles'], () => {
    gulp.watch(`${STYLES_SRC}/*.scss`, ['styles'])
        .on('change', (file) => {
            console.log(`File ${file.path} was ${file.type}, running 'styles' task...`);
        });
});