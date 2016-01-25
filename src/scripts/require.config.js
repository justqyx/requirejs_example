require.config({
    // The root path to use for all module lookups.
    // baseUrl: '',

    // Path mappings for module names not found directory under baseUrl.
    paths: {
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
        }
    },

    // map: {
    // },

    // config: {
    // },

    // packages: [],

    // deps: [],
    // callback: function() {
    // },
});
