function PostDetail($scope, postsService, commentsService, $q) {
  $scope.loading = true;
  $scope.details = [];

  $q.all([postsService.get(1), commentsService.query()]).then(function (apiResults) {
    $scope.post = apiResults[0].data;
    $scope.comments = _.map(apiResults[1].data, function (detail){
      return {
        detailList: [{
          name: 'Subject',
          text: detail.name,
          styled: 'bold-description'
        }, {
          name: 'Email',
          text: detail.email
        }],
        body: detail.body
      };
    });
    $scope.loading = false;
  });
}
angular.module('posts').controller('PostDetail', ['$scope', 'postsService', 'commentsService', '$q', PostDetail]);
