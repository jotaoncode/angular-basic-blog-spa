function postsService($http) {
  var baseUrl = 'http://localhost:3000/';

  return {
    query: function () {
      return $http.get(baseUrl + 'posts').then(function (postsData) {
        return _.map(postsData, function (post) {
          return _.extend(post, { comments: _.random(0, 10)});
        });
      });
    },
    put: function (post) {
      return $http.put(baseUrl + 'posts', post);
    },
    post: function (post) {
      return $http.put(baseUrl + 'posts', post);
    }
  };
}
angular.module('blog-core').factory('postsService', ['$http', postsService]);
