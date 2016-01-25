'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var connect = require('gulp-connect');
var requirejs = require('requirejs');

var buildConfig = require('./app.build.js');

var Logger = {
    green: (text) => {
        $.util.log($.util.colors.green(text));
    },
    red: (text) => {
        $.util.log($.util.colors.red(text));
    }
};

gulp.task('default', () => {
    Logger.green("--- Hello, world. ---");
});

gulp.task('serve', () => {
    $.connect.server({
        root: ['src'],
        port: 9201
    });
});

gulp.task('build', () => {
    requirejs.optimize(buildConfig, (buildResponse) => {
        Logger.green("--- requirejs optimize done. ---");
    });
});
