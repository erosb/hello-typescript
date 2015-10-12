/// <amd-dependency path="text!../template/ActorView.html" />
import Backbone = require("backbone");
import ActorModel = require("../model/ActorModel");

declare var require:(moduleId:string) => any;
var template = require("text!../template/ActorView.html");

class ActorView extends Backbone.View<ActorModel> {
	
	render() {
		this.$el.append(template);
		return this;
	}
}

export = ActorView;
