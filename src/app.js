/**
 * Templates
 */
var fs = require('fs');
var path = require('path');
var posts = fs.readFileSync(__dirname + '/posts/posts.html', 'utf8');
var login = fs.readFileSync(__dirname + '/login/login.html', 'utf8');
var postDetail = fs.readFileSync(__dirname + '/posts/details/postDetail.html', 'utf8');
var createPost = fs.readFileSync(__dirname + '/posts/create/newPost.html', 'utf8');

require('./directives/uiBlog');
require('./services/blogCore');

/**
 * Blog application
 */
angular.module('Blog', [
  'ngRoute',
  'ngMaterial',
  'LocalForageModule',
  'login',
  'posts',
  'blog-ui',
  'blog-core'
]).config(function ($routeProvider) {
  function checkLoggedInUser (authService, $q, $location) {
    var def = $q.defer();
    authService.getSession().then(function (session) {
      if (session) {
        def.resolve(session);
      } else {
        def.reject();
        $location.path('/');
      }
    });
    return def.promise;
  }
  $routeProvider
  .when('/', {
    controller: 'LoginCtrl',
    template: login
  })
  .when('/posts', {
    controller: 'PostsCtrl',
    template: posts,
    resolve: {
      checkLoggedInUser: ['authService', '$q', '$location', checkLoggedInUser]
    }
  })
  .when('/posts/create', {
    controller: 'CreatePostCtrl',
    template: createPost,
    resolve: {
      checkLoggedInUser: ['authService', '$q', '$location', checkLoggedInUser]
    }
  })
  .when('/posts/:post', {
    controller: 'PostDetail',
    template: postDetail,
    resolve: {
      checkLoggedInUser: ['authService', '$q', '$location', checkLoggedInUser]
    }
  })
  .otherwise('/');
});

require('./posts/PostsCtrl');
require('./posts/details/PostDetailCtrl');
require('./posts/create/CreatePostCtrl');
require('./login/LoginCtrl');
