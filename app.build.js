({
    // 应用程序目录。在这个文件夹下的所有文件将会被复制到 dir 参数所指定的目录。
    appDir: 'src',

    // 相对于 appDir，代表查找文件的锚点
    baseUrl: 'scripts',

    // 输出目录。所有的应用程序文件将会被复制到该文件夹下
    dir: 'dist',

    // 模块的相对目录
    paths: {
        'core': 'core/main',
        'jquery': 'bower_components/jquery/dist/jquery',
        'underscore': 'bower_components/underscore/underscore',
        'backbone': 'bower_components/backbone/backbone'
    },

    packages: [
        { name: 'index', location: './', main: 'index' },
        { name: 'core', location: './core', main: 'main' },
        { name: 'profile', location: './profile', main: 'main' }
    ],

    // 每个对象代表一个将被优化的模块。
    modules: [
        {
            name: 'core'
        },
        {
            name: 'index',
            exclude: ['core']
        },
        {
            name: 'profile',
            exclude: ['core']
        }
    ],

    // As of RequireJS 2.0.2, the dir above will be deleted before the build starts again.
    keepBuildDir: false,

    fileExclusionRegExp: /^\.|\.min\.js|-min\.js/,

    // Use `uglify` to optimize all ja files in the build ouput directory
    optimize: 'uglify',

    // Skip css optimizations
    optimizeCss: 'none',

    // Allow `"use strict"` be included in the RequireJS file
    useStrict: true,

    optimizeAllPluginResources: false,

    // If set to true, any files that were combined into a build bundle will be removed from the output folder.
    removeCombined: true
})
