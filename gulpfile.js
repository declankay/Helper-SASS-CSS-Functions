(function () {
    'use strict';

    // Gulp task runner
    var gulp = require('gulp');

    // Allows SASS to be used
    var sass = require('gulp-sass')(require('sass'));

    // Concatenate files together
    var concat = require('gulp-concat');

    // Rename files
    var rename = require('gulp-rename');

    // CSS
    gulp.task('css', function () {
        return gulp.src(['_scss/1-modules.scss'])
            .pipe(sass({ outputStyle: 'compressed' })
                .on('error', sass.logError))
            .pipe(sass()
                .on('error', sass.logError))
            .pipe(rename({ basename: 'functions', extname: '.css' }))
            .pipe(gulp.dest('../sass'));
    });

    // Gulp
    gulp.task('default', function () {

        // CSS
        gulp.watch([
            '_scss/*.scss',
        ], gulp.series('css'));

    });

}());