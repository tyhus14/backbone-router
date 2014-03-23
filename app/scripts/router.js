var MainRouter = Backbone.Router.extend({


    routes: {
        'about': 'aboutPage',
        'about/:name': 'aboutPage',
        'gimli': 'gimliPage',
        'legolas': 'legolasPage',
        'aragorn': 'aragornPage'
    },


    initialize: function() {
        console.log('Hey guys, a router is born!')
    },

    aboutPage: function(name) {
        if (name) {
            console.log("heres a page about", name)
        } else {
            console.log('Boom! Youre at the About Page')
        }
    },

    gimliPage: function() {
        new CharacterView();
    },

    legolasPage: function() {
        new LegolasView();
    },

    aragornPage: function() {
        new AragornView();
    }

})