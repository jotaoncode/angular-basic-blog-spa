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
  'blog-core',
  'partials'
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
    templateUrl: 'login/login.tmpl.html'
  })
  .when('/posts', {
    controller: 'PostsCtrl',
    templateUrl: 'posts/posts.tmpl.html',
    resolve: {
      checkLoggedInUser: ['authService', '$q', '$location', checkLoggedInUser]
    }
  })
  .when('/posts/create', {
    controller: 'CreatePostCtrl',
    templateUrl: 'posts/create/newPost.tmpl.html',
    resolve: {
      checkLoggedInUser: ['authService', '$q', '$location', checkLoggedInUser]
    }
  })
  .when('/posts/:post', {
    controller: 'PostDetail',
    templateUrl: 'posts/details/postDetail.tmpl.html',
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
