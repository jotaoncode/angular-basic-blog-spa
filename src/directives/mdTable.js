var fs = require('fs');
var template = fs.readFileSync(__dirname + '/table.html', 'utf8');

var TableDirective = function () {
  return {
    restrict: 'E',
    controllerAs: 'tableCtrl',
    template: template,
    scope: {
      options: "=",
      content: "=",
      details: "@"
    }
  };
};
angular.module('blog-ui').directive(TableDirective);
module.exports = TableDirective;
