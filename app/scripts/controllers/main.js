'use strict';

/**
 * @ngdoc function
 * @name troutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the troutApp
 */
angular.module('troutApp')
  .controller('MainController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
