function postsService($http, authService) {
  var baseUrl = 'http://localhost:3000/';

  return {
    query: function () {
      return $http.get(baseUrl + 'posts').then(function (postsData) {
        return postsData;
      });
    },
    put: function (post) {
      return authService.getSession().then(function (session) {
        return $http.put(baseUrl + 'posts', post);
      });
    },
    create: function (post) {
      return authService.getSession().then(function (session) {
        return $http.post(baseUrl + 'posts', _.extend({}, post, { userId: 1}));
      });
    }
  };
}
angular.module('blog-core').factory('postsService', ['$http', 'authService', postsService]);
