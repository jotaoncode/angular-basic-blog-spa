function CreatePostCtrl ($scope, $location, postsService) {
  $scope.title = "";
  $scope.description = "";

  function isValid () {
    return true;
  }
  $scope.save = function () {
    if (isvalid()) {

    } else {
      alert('please correct the form');
    }
  };
}

angular.module('posts').controller('CreatePostCtrl', ['$scope', '$location', 'postsService', CreatePostCtrl]);
