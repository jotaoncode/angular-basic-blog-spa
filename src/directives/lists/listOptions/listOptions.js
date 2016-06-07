var fs = require('fs');

var template = fs.readFileSync(__dirname + '/listOptions.html', 'utf8');

var ListDirective = function () {
  return {
    restrict: 'E',
    template: template,
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