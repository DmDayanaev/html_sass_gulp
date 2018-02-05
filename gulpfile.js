	const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
	minify = require('gulp-csso'),
	rename = require('gulp-rename'),
	STYLES_SRC = './sass',
    STYLES_DEST = './css';

// Compile & build 'css', using SASS source
gulp.task('styles', () => {
    let styles = gulp.src(`${STYLES_SRC}/page.scss`)
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
		.pipe(gulp.dest(STYLES_DEST))
		.pipe(minify())
		.pipe(rename('page.min.css'))
        .pipe(gulp.dest(STYLES_DEST));
});

// Add styles watcher
gulp.task('styles:w', ['styles'], () => {
    gulp.watch(`${STYLES_SRC}/*.scss`, ['styles'])
        .on('change', (file) => {
            console.log(`File ${file.path} was ${file.type}, running 'styles' task...`);
        });
});