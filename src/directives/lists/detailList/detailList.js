var fs = require('fs');

//var template = fs.readFileSync(__dirname + '/detailList.html', 'utf8');

var ListDirective = function () {
  return {
    restrict: 'E',
    templateUrl: 'directives/lists/detailList/detailList.tmpl.html',
    scope: {
      details: "=",
      list: "=",
      styled: "@"
    }
  };
};

angular.module('blog-ui').directive('detailList', ListDirective);
module.exports = ListDirective;
