var post = require('./post.json');

function PostDetail($scope) {
  $scope.post = _.clone(post);
  $scope.post.dob = moment(post.dob).format('L');
}
angular.module('posts').controller('PostDetail', ['$scope', PostDetail]);
