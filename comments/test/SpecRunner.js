require.config({
    baseUrl: "../app/js",
    urlArgs: 'cb=' + Math.random(),
    paths: {
        jquery: '../components/jquery/dist/jquery',
        underscore: '../components/underscore/underscore',
        backbone: '../components/backbone/backbone',
        spec: '../../test/spec'
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(['jquery', 'spec/index'], function ($, index) {

    var env = jasmine.getEnv();

    if (navigator.userAgent.indexOf("PhantomJS") > 0) {
        var ConsoleReporter = jasmineRequire.ConsoleReporter();
        var consoleReporter = new ConsoleReporter({
            showColors: true,
            timer: new jasmine.Timer,
            print: function () {
                console.log.apply(console, arguments)
            }
        });

        env.addReporter(consoleReporter);
    }

    $(function () {
        require(index.specs, function () {
            env.execute();
        });
    });
});

