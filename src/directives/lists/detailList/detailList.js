var fs = require('fs');

var template = fs.readFileSync(__dirname + '/detailList.html', 'utf8');

var ListDirective = function () {
  return {
    restrict: 'E',
    template: template,
    scope: {
      details: "=",
      list: "=",
      styled: "@"
    }
  };
};

angular.module('blog-ui').directive('detailList', ListDirective);
module.exports = ListDirective;
