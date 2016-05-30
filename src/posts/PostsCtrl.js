function PostsCtrl ($scope, $location, postsService, authService) {
  $scope.loading = true;
  postsService.query().then(function (response, status) {
    if (response.status === 200) {
      $scope.content = response.data;
      $scope.postsOptions = [{
        isButton: true,
        name: 'details',
        click: function (postClicked) {
          $location.path('posts/' + postClicked);
        }
      }];
    }
    $scope.loading = false;
  }, function (err) {
    console.log(err);
  });

  $scope.createPost = function (event) {
    event.preventDefault();
    $location.path('posts/create');
  };

  authService.getSession().then(function (session) {
    $scope.userName = session;
  });

  $scope.headerOptions = [{
    click : function (event) {
      authService.logOut().then(function () {
        $location.path('/');
      });
    },
    name: 'LogOut'
  }];
}

angular.module('posts', []).controller('PostsCtrl', ['$scope', '$location', 'postsService', 'authService', PostsCtrl]);
