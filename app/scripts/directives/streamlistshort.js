'use strict';

/**
 * @ngdoc directive
 * @name troutApp.directive:streamListShort
 * @description
 * # streamListShort
 */
angular.module('troutApp')
  .directive('streamListShort', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the streamListShort directive');
      }
    };
  });
