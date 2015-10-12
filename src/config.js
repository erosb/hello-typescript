requirejs.config({
  shim: {

  },
  paths: {
    backbone: "../bower_components/backbone/backbone",
    underscore: "../bower_components/underscore/underscore",
    jquery: "../bower_components/jquery/dist/jquery",
    requirejs: "../bower_components/requirejs/require",
    text: "../bower_components/text/text"
  },
  packages: [

  ]
});
console.log("config loading done");	
define(["jquery", "view/ActorView"], function($, ActorView) {
	console.log("itt");		
	var actorView = new ActorView();
	
	$("body").append(actorView.render().$el);
	
});
console.log("after the define call");	
