var HeaderDirective = function () {
  return {
    restrict: 'E',
    templateUrl: 'directives/headers/header.tmpl.html',
    scope: {
      user: "=",
      options: "="
    }
  };
};

angular.module('blog-ui').directive('simpleHeader', HeaderDirective);
module.exports = HeaderDirective;
