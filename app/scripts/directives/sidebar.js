'use strict';

/**
 * @ngdoc directive
 * @name troutApp.directive:sidebar
 * @description
 * # sidebar
 */
angular.module('troutApp')
  .directive('sidebar', function () {
    return {
      templateUrl: 'views/sidebar.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the sidebar directive');
      }
    };
  });
