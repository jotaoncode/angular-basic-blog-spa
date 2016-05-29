function LoginCtrl ($scope, $location, authService) {
  $scope.userName = "";
  function isValid () {
    return $scope.userName;
  }
  $scope.login = function () {
    if (isValid()) {
      authService.saveSession($scope.userName).then(function () {
        $location.path('/posts');
      });
    } else {
      alert('please correct the form');
    }
  };
}

angular.module('login', []).controller('LoginCtrl', ['$scope', '$location', 'authService', LoginCtrl]);
