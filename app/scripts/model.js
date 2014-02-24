var Message = Backbone.Model.extend({
	defaults: {
  	name: 'Tyler',
  	messageText: "hello",
	}
});

var ProfileCollection = Backbone.Collection.extend({
	model: Profile,

	url: 'http://tiny-pizza-server.herokuapp.com/collections/messages'
})
