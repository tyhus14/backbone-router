var Character = Backbone.Model.extend(data);

var CharacterCollection = Backbone.Collection.extend({
	model: Character,

})