var ListDirective = function () {
  return {
    restrict: 'E',
    templateUrl: 'directives/lists/listOptions/listOptions.tmpl.html',
    scope: {
      options: "=",
      content: "=",
      details: "@",
      loading: "="
    }
  };
};

angular.module('blog-ui').directive('listOptions', ListDirective);
module.exports = ListDirective;
