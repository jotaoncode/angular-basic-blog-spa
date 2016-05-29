function CreatePostCtrl ($scope, $location, postsService) {
  $scope.title = "";
  $scope.description = "";

  function isValid () {
    return true;
  }
  $scope.save = function () {
    if (isValid()) {
      postsService.create({
        title: $scope.title,
        body: $scope.descrition,
        userId: 1
      }).then(function (results) {
        alert('correctly saved');
      });
    } else {
      alert('please correct the form');
    }
  };
}

angular.module('posts').controller('CreatePostCtrl', ['$scope', '$location', 'postsService', CreatePostCtrl]);
