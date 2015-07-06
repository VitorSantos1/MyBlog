/**
 * Created by vitorsantos on 06/07/2015.
 */
Router.configure({
    //App starts here
    layoutTemplate: 'appBody'
});

Router.map(function(){
    this.route('home', {
        path: '/',
        layoutTemplate: 'appBody'
    });
    this.route('join', {
        path: '/join',
        layoutTemplate: 'join'
    });
    this.route('signin', {
        path: '/signin',
        layoutTemplate: 'signin'
    });
    this.route('newPost', {
        path: '/newpost',
        layoutTemplate: 'newPost'
    });
    this.route('post',{
        path: '/post/:_id',
        layoutTemplate:'post'
    });
});