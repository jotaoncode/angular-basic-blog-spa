function LoginCtrl ($scope, $location, authService) {
  $scope.userName = "";
  $scope.login = function () {
    if (authService.isValidUserCredential($scope.userName)) {
      authService.saveSession($scope.userName).then(function () {
        $location.path('/posts');
      });
    } else {
      alert('please correct the form');
    }
  };
}

angular.module('login', []).controller('LoginCtrl', ['$scope', '$location', 'authService', LoginCtrl]);
