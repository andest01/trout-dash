'use strict';

/**
 * @ngdoc function
 * @name troutApp.controller:TipsCtrl
 * @description
 * # TipsCtrl
 * Controller of the troutApp
 */
angular.module('troutApp')
  .controller('TipsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
