'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var connect = require('gulp-connect');

// 官网获取得到的
var requirejs = require('requirejs');
var buildConfig = require('./app.build.js');

// 社区获取到的
var amdOptimize = require('amd-optimize');

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

gulp.task('rjs:build', () => {
    requirejs.optimize(buildConfig, () => {
        Logger.green("--- requirejs optimize done. ---");
    }, function(err) {
        Logger.error(err);
    });
});

// 始终逃不过两处配置
gulp.task('build', () => {
    gulp.src('src/scripts/**/*.js')
        .pipe(amdOptimize('index', {
            paths: {
                'jquery': 'src/scripts/bower_components/jquery/dist/jquery',
                'underscore': 'src/scripts/bower_components/underscore/underscore',
                'backbone': 'src/scripts/bower_components/backbone/backbone'
            },
            findNestedDependencies: true,
        }))
        .pipe($.debug({ title: 'amd-optimize' }))
        .pipe($.concat('index.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest('dist/scripts'));
});
