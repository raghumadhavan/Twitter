var Backbone = require('backbone');
var _ = require('underscore');
var templates = require('./templates.js');

module.exports = Backbone.View.extend({
    tagName: 'li',
    className: 'list-group-item',
    template: _.template(templates.tweet),
    events: {
        'click .glyphicon-remove-sign': 'removeTweet',
        'click .edit-tweet': 'toggleEdit',
        'click .delete-tweet': 'removeTweet',
        'submit form': 'editTweet',
    },
    toggleEdit: function() {
        event.preventDefault();
        this.$el.find('form').toggleClass('hidden');
        this.$el.find('p').toggleClass('hidden');
    },
    editTweet: function(event) {
        event.preventDefault();
        this.toggleEdit();
        this.model.set({
            content: this.$el.find('input').val(),
        });
        this.model.save();
    },
    removeTweet: function() {
        this.model.destroy();
    },
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
        var markup = this.template(this.model.toJSON());
        this.$el.html(markup);
        return this;
    }
});
