'use strict';

/**
 * @ngdoc function
 * @name troutApp.controller:StreamsearchCtrl
 * @description
 * # StreamsearchCtrl
 * Controller of the troutApp
 */
angular.module('troutApp')
  .controller('StreamsearchCtrl', function ($scope, $stateParams) {
  	$scope.selectedStreamId = 0;

  	$scope.$on('setSeletedStreamId', function(newStreamId, newStreamId) {

  	});
  });
