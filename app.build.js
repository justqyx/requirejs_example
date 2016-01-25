module.exports = {
    // 应用程序目录。在这个文件夹下的所有文件将会被复制到 dir 参数所指定的目录。
    appDir: 'src',

    // 相对于 appDir，代表查找文件的锚点
    baseUrl: 'scripts',

    // 输出目录。所有的应用程序文件将会被复制到该文件夹下
    dir: 'dist',

    // 模块的相对目录
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery',
        'underscore': 'bower_components/underscore/underscore',
        'backbone': 'bower_components/backbone/backbone'
    },

    // 每个对象代表一个将被优化的模块。
    modules: [
        { name: 'index' }
    ]
};
