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
        // scope.center = {
        // 	lat: 43.35713822211053,
        // 	lng: -92.1533203125,
        // 	zoom: 5
        // };

        // 45.1861307,-92.1527944
      }
    };
  });
