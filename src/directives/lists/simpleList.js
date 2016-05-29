var fs = require('fs');

var template = fs.readFileSync(__dirname + '/list.html', 'utf8');

var ListDirective = function () {
  return {
    restrict: 'E',
    template: template,
    scope: {
      options: "=",
      content: "=",
      details: "@"
    }
  };
};

angular.module('blog-ui').directive('simpleList', ListDirective);
module.exports = ListDirective;
