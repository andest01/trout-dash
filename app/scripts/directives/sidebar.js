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
      link: function postLink(scope, element, attrs) {
      	scope.onGetStreamsSuccess = function(streams) {
          console.log(streams);
      		scope.streams = streams.features;
      	};

      	scope.onGetStreamsFailure = function(reason) {
      		console.log('fail;', reason);
      	};

      	scope.onGetStreamsProgress = function(data) {
 			    console.log('progress', data);
      	};

      	StreamApiService.getStreams('minnesota', 'saintCroix')
          .then(scope.onGetStreamsSuccess, 
            scope.onGetStreamsFailure,
            scope.onGetStreamsProgress);
        }
    };
  }]);
