function CreatePostCtrl ($scope, $location) {
  $scope.title = "";
  $scope.description = "";

  function isValid () {
    return true;
  }
  $scope.save = function () {
    if (isvalid()) {
      alert('saving post');
    } else {
      alert('please correct the form');
    }
  };
}

angular.module('posts').controller('CreatePostCtrl', ['$scope', '$location', CreatePostCtrl]);
