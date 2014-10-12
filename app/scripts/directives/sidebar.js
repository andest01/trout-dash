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
      link: function postLink(scope /*, element, attrs*/) {
        scope.viewModel = {
          name: scope.stream,
          link: 'asdfasdf',
          id: 123,
          length: 342
        };

      	scope.onGetStreamsSuccess = function(streams) {
      		scope.streams = streams.features;
      	};

      	scope.onGetStreamsFailure = function(reason) {
      		console.log('fail;', reason);
      	};

      	scope.onGetStreamsProgress = function(data) {
 			    console.log('progress', data);
      	};

        scope.onStreamClick = function(selectedStream) {
          var newPath = '/streams/' + selectedStream.properties.gid;
          // console.log('old path', $location.path());
          // $location.path(newPath);
        };

      	StreamApiService.getStreams('minnesota', 'saintCroix')
          .then(scope.onGetStreamsSuccess, 
            scope.onGetStreamsFailure,
            scope.onGetStreamsProgress);
        }
    };
  }]);
