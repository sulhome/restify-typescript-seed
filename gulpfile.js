"use strict";
var gulp = require('gulp');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tsProject = tsc.createProject('tsconfig.json');
var config = require('./gulpConfig');

gulp.task('compile-all', function () {
    var sourceTsFiles = [config.allts,
        config.allTypings];

    var tsResult = gulp.src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    tsResult.dts.pipe(gulp.dest(config.outputFolder));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.outputFolder));
});

gulp.task('compile-test', function () {
    var sourceTsFiles = [config.allTests, config.allTypings];
    var tsResult = gulp.src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    tsResult.dts.pipe(gulp.dest(config.outputFolder));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.outputFolder));
});