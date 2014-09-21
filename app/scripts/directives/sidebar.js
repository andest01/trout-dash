'use strict';

/**
 * @ngdoc directive
 * @name troutApp.directive:sidebar
 * @description
 * # sidebar
 */
angular.module('troutApp')
  .directive('sidebar', ['StreamApiService', function (StreamApiService) {
    return {
      templateUrl: 'views/sidebar.html',
      restrict: 'A',
      link: function postLink(scope) {
      	scope.onGetStreamsSuccess = function(streams) {
      		console.log(streams);
      	};

      	scope.onGetStreamsFailure = function(reason) {
      		console.log('fail;', reason);
      	};

      	scope.onGetStreamsProgress = function(data) {
 			console.log('progress', data);
      	};

      	console.log(StreamApiService);
      	var gettingStreams = StreamApiService.getStreams();
      	gettingStreams.then(scope.onGetStreamsSuccess, 
      		scope.onGetStreamsFailure,
      		scope.onGetStreamsProgress);
      }
    };
  }]);
