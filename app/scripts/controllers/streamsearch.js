'use strict';

/**
 * @ngdoc function
 * @name troutApp.controller:StreamsearchCtrl
 * @description
 * # StreamsearchCtrl
 * Controller of the troutApp
 */
angular.module('troutApp')
  .controller('StreamsearchCtrl', function ($scope, $stateParams, $state, $location) {
  	
    $scope.navigateToStream = function(streamId) {
        console.log('navigating to... ', streamId);
        // $scope.selectedStreamId = streamId;
        $state.go('streamSearch.specificStream', { streamId: streamId});
    };



    $scope.getStreamId = function() {
    	var path = $location.$$path;
        var tokens = path.split('/');
        var pathString = tokens[tokens.length - 1];
        var streamId = parseInt(pathString);

        return streamId;
    };

    $scope.$on('$locationChangeSuccess', function(x) {
        console.log('stuff changed lol', x, $stateParams, $location);
    	var streamId = $scope.getStreamId();
        $scope.selectedStreamId = streamId;

    });

    $scope.selectedStreamId = $scope.getStreamId();
  });
