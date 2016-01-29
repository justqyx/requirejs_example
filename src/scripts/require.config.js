var bowerPrefix = 'bower_components/';

// baseUrl 以 src/scripts 为根目录来查找文件
// paths   配置通过 bower 安装的插件
// shim    配置加载依赖，并且可以导出全局变量，如 jQuery

require.config({
    // The root path to use for all module lookups.
    // baseUrl: '',
    baseUrl: '/scripts',

    // Path mappings for module names not found directory under baseUrl.
    paths: {
        'core': 'core/main',
        'jquery': 'bower_components/jquery/dist/jquery',
        'underscore': 'bower_components/underscore/underscore',
        'backbone': 'bower_components/backbone/backbone'
    },

    // 这个配置不明白
    // RequireJS2.1.10 Support
    // Allow configuring multiple module IDs to be found in another script.
    // bundles: {
    // },

    // Configure the dependencies, exports, and custom initialization for older,
    // traditional 'browser globals' scripts that do not use define() to declare
    // the dependencies and set a module value.
    shim: {
        'backbone':  {
            depts: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        }
    },

    // map: {
    // },

    // config: {
    // },

    // packages: [
    // ],

    modules: [
        {
            name: 'index',
            include: ['index']
        }
    ]

    // deps: [],
    // callback: function() {
    // },
});
