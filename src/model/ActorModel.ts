import Backbone = require("backbone");
import GeometryModel = require("./GeometryModel");


class ActorModel extends Backbone.Model {
	
	constructor(private name: string, private geometry: GeometryModel) {
		super();
	}	
}

export = ActorModel;
