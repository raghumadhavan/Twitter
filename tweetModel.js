var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    idAttribute: "_id",
    defaults: {
        author: 'Jesse Pinkman',
        avatar: 'img/pink.jpg',
        handle: 'pinkman',
        date: 'Jun 10',
        content: 'This is a tweet',
    },
    initialize: function(stuff) {
        console.log("new tweet model created: ");
        console.log(stuff);
    }
});
