var CharacterView = Backbone.View.extend({

className: 'person',

characterTemplate: _.template($('#character-template').text()),

	initialize: function(){
		$('.people-js').html(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.characterTemplate);
	}

});


var LegolasView = Backbone.View.extend({

className: 'person',

legolasTemplate: _.template($('#legolas-template').text()),

	initialize: function(){
		$('.people-js').html(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.legolasTemplate);
	}

});


var AragornView = Backbone.View.extend({

className: 'person',

aragornTemplate: _.template($('#aragorn-template').text()),

	initialize: function(){
		$('.people-js').html(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.aragornTemplate);
	}

})