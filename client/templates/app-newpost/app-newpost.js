/**
 * Created by vitorsantos on 06/07/2015.
 */

Template.newPost.events({
    'submit': function (event, template) {
        event.preventDefault();
        var newTitle = template.$('[name=title]').val(),
            newText = template.$('[name=text]').val();

        Posts.insert({
            userId: Meteor.userId(),
            title: newTitle,
            text: newText
        });

        Router.go('home');
    }
});