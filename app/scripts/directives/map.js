'use strict';

/**
 * @ngdoc directive
 * @name troutApp.directive:map
 * @description
 * # map
 */
angular.module('troutApp')
  .directive('map', function () {
    return {
      templateUrl: 'views/map.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the map directive');
      }
    };
  });
