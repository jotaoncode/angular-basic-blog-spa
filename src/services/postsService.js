function postsService($http, authService) {
  var baseUrl = 'http://localhost:3000/';

  return {
    query: function () {
      return $http.get(baseUrl + 'posts').then(function (postsData) {
        //extending results to have comments not provided by API, just as i.e.
        postsData.data = _.map(postsData.data, function (postData) {
          return _.extend({}, {comments : _.random(1, 100)}, postData);
        });
        console.log(postsData);
        return postsData;
      });
    },
    get: function (postId) {
      return $http.get(baseUrl + 'posts/' + postId).then(function (postData) {
        return postData;
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
