var fs = require('fs');

var template = fs.readFileSync(__dirname + '/welcome.html', 'utf8');

var ListDirective = function () {
  return {
    restrict: 'E',
    template: template,
    scope: {
      styled: "@"
    },
    controller: function () {
      var delay = 0,
      speed
      welcome = $('#welcome'),
      paths = $('.welcome svg path, circle, rect');

      _.each(paths, function (path, index) {
        var length = path.getTotalLength();
        var prevsiousStrokeLength = speed || 0;
        speed = length < 100 ? 20 : Math.floor(length);
        delay += prevsiousStrokeLength + 100;
        $(path).css('transition', 'none')
               .attr('data-length', length)
               .attr('data-speed', speed + 10)
               .attr('data-delay', delay)
               .attr('stroke-dashoffset', length)
               .attr('stroke-dasharray', length + ',' + length);
      });
      welcome.css('opacity', '1');
      _.each(paths, function (path, index) {
        var length = $(path).attr('data-length');
        var speed = $(path).attr('data-speed');
        var delay = $(path).attr('data-delay');

        $(path).css('transition', 'stroke-dashoffset ' + speed + 'ms ' + delay + 'ms linear')
               .attr('stroke-dashoffset', '0');
      });
    }
  };
};

angular.module('blog-ui').directive('welcome', ListDirective);
module.exports = ListDirective;
