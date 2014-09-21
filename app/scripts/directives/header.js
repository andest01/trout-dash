'use strict';

/**
 * @ngdoc directive
 * @name troutApp.directive:header
 * @description
 * # header
 */
angular.module('troutApp')
  .directive('header', function () {
    return {
      templateUrl: 'views/header.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        console.log('header');
      }
    };
  });
