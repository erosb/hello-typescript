requirejs.config({
  shim: {

  },
  paths: {
    backbone: "../bower_components/backbone/backbone",
    underscore: "../bower_components/underscore/underscore",
    jquery: "../bower_components/jquery/dist/jquery",
    requirejs: "../bower_components/requirejs/require",
    text: "../bower_components/text/text",
    "jasmine-core": "../bower_components/jasmine-core/lib/jasmine-core/jasmine",
    handlebars: "../bower_components/handlebars/handlebars"
  },
  packages: [

  ]
});

define(["app"], function(app) {
	app();
});

