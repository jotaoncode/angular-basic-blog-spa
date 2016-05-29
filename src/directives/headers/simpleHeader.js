var fs = require('fs');

var template = fs.readFileSync(__dirname + '/header.html', 'utf8');

var HeaderDirective = function () {
  return {
    restrict: 'E',
    template: template,
    scope: {
      user: "=",
      options: "="
    }
  };
};

angular.module('blog-ui').directive('simpleHeader', HeaderDirective);
module.exports = HeaderDirective;
