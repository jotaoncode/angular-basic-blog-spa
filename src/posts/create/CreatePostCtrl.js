function CreatePostCtrl ($scope, $location, postsService) {

  $scope.title = "";
  $scope.description = "";

  $scope.save = function () {
    postsService.create({
      title: $scope.title,
      body: $scope.descrition,
      userId: 1
    }).then(function (results) {
      alert('correctly saved');
    });
  };
}

angular.module('posts').controller('CreatePostCtrl', ['$scope', '$location', 'postsService', CreatePostCtrl]);
