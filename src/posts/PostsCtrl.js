function PostsCtrl ($scope, $location, postsService, authService) {

  postsService.query().then(function (response) {
    if (response[1] === 200) {
      $scope.content = response[0];
      $scope.postsOptions = [{
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
