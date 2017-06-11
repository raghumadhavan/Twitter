var Backbone = require('backbone');
var TweetModel = require('./tweetModel');

module.exports = Backbone.Collection.extend({
    model: TweetModel,
    url: 'https://api.myjson.com/bins/134uej',
    initialize: function() {
        console.log('new collection created');
    }
});
