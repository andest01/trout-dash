'use strict';

/**
 * @ngdoc function
 * @name troutApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the troutApp
 */
angular.module('troutApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
