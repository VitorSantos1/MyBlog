/**
 * Created by vitorsantos on 06/07/2015.
 */

Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function(userId, doc) {
        return (userId && doc['userId'] === userId);
    }
});

Comments = new Mongo.Collection('comments');

Comments.allow({
    insert: function(userId, doc) {
        return (userId && doc['userId'] === userId);
    }
});