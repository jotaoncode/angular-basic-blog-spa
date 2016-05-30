function PostDetail($scope, postsService, commentsService, $q) {
  $scope.loading = true;
  $q.all([postsService.get(1), commentsService.query()]).then(function (apiResults) {
    $scope.post = apiResults[0].data;
    $scope.comments = apiResults[1].data;
    $scope.loading = false;
  });
}
angular.module('posts').controller('PostDetail', ['$scope', 'postsService', 'commentsService', '$q', PostDetail]);
