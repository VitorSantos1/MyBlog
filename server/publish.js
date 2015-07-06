/**
 * Created by vitorsantos on 06/07/2015.
 */

Meteor.publish('posts', function () {
    return Posts.find();
});

Meteor.publish('comments', function () {
    return Comments.find();
});