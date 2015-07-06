/**
 * Created by vitorsantos on 06/07/2015.
 */

Meteor.subscribe('posts');

Template.appBody.helpers({
    currentUsername: function () {
        var email = Meteor.user().emails[0].address;
        return email.substring(0, email.indexOf('@'));
    },
    posts: function () {
        return Posts.find();
    }
});

Template.appBody.events({
    'click .js-logout': function () {
        Meteor.logout();
    }
});