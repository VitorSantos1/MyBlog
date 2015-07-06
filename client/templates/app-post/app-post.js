/**
 * Created by vitorsantos on 06/07/2015.
 */

Meteor.subscribe('comments');

Template.post.helpers({
    post: function () {
        var currentURL = Iron.Location.get().href,
            postId = currentURL.split("/").reverse()[0];

        return Posts.findOne({
            _id: postId
        });
    },
    comments: function () {
        var currentURL = Iron.Location.get().href,
            postId = currentURL.split("/").reverse()[0];

        return Comments.find({
            postId: postId
        });
    }
});

Template.post.events({
    'submit': function (event, template) {
        event.preventDefault();

        var currentURL = Iron.Location.get().href,
            postId = currentURL.split("/").reverse()[0],
            newText = template.$('[name=text]').val(),
            email = Meteor.user().emails[0].address,
            username = email.substring(0, email.indexOf('@'));

        Comments.insert({
            userId: Meteor.userId(),
            postId: postId,
            user: username,
            text: newText
        });

        Router.go('post', {
            _id: postId
        });
    }
});