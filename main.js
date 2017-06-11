var $ = require('jquery');
var TweetModel = require('./tweetModel');
var TweetCollection = require('./tweetCollection.js');
var TweetCollectionView = require('./tweetCollectionView.js');
var newTweetView = require('./newTweetView.js');

$(document).ready(function() {

    var tweetColl = new TweetCollection();
    console.log(tweetColl.models.length);
    tweetColl.fetch().done(function(data) {
        new TweetCollectionView({
            collection: tweetColl
        });
    });

    var newTweetForm = new newTweetView({
        collection: tweetColl
    });
    $('#new-tweet').append(newTweetForm.render().el);
});
