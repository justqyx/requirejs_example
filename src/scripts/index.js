// 必须先加载 require.config.js，才能确保接下来的事情不会出错
require(['require.config'], function() {

    // require.config.js 加载完毕，整个程序的逻辑入口就在这里。
    require([
        'helper/util',
        'underscore'
    ], function(util) {
        util.sayHello();
        console.info("_.VERSION = " + _.VERSION);
    });

});
