var MainRouter = Backbone.Router.extend({


	routes: {
		'about' : 'aboutPage',
		'about/:name' : 'aboutPage'
	},


	initialize: function(){
		console.log('Hey guys, a router is born!')
	},

	aboutPage: function(name){
		if (name){
		console.log("heres a page about", name)
	} else {
		console.log('Boom! Youre at the About Page (bitches)!')
	}
	}
})
