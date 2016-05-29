function PostsCtrl ($scope, $location, postsService) {

  postsService.query().then(function (response) {

    if (response[1] === 200) {
      $scope.content = response[0];
      $scope.options = [{
        isButton: true,
        name: 'details',
        click: function (postClicked) {
          $location.path('posts/' + postClicked);
        }
      }];
    }
  }, function (err) {
    console.log(err);
  });

  $scope.createPost = function (event) {
    event.preventDefault();
    $location.path('posts/create');
  };
}

angular.module('posts', []).controller('PostsCtrl', ['$scope', '$location', 'postsService', PostsCtrl]);
