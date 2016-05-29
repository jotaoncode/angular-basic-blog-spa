function commentsService($http) {
  var baseUrl = 'http://localhost:3000/';

  return {
    query: function () {
      return $http.get(baseUrl + 'comments');
    },
    put: function (post) {
      return $http.put(baseUrl + 'comments', post);
    },
    create: function (post) {
      return $http.put(baseUrl + 'comments', post);
    }
  };
}
angular.module('blog-core').factory('commentsService', ['$http', commentsService]);
