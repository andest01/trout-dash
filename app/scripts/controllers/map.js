'use strict';

/**
 * @ngdoc function
 * @name troutApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the troutApp
 */
angular.module('troutApp')
  .controller('MapCtrl', ['$scope', 'StreamApiService', '$stateParams', '$state', function ($scope, StreamApiService, $stateParams, $state) {
        console.log($stateParams);
        $scope.selectedStreamId = $stateParams.streamId;
        StreamApiService.getStreams('minnesota', 'saintCroix')
        .then(function(data) {
            $scope.geojson = { 
                data: data,
                style: {
                    fillColor: 'green',
                    weight: 10,
                    opacity: 1,
                    color: 'blue'
                }
            };

            // if ($scope.selectedStreamId != null) {
            //     $scope.selectedStream = 
            // }
        });

        $scope.center = {
            lat: 43.35713822211053,
            lng: -92.1533203125,
            zoom: 7
        };

        $scope.tile = {
            url: "http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png",
            options: {
                detectRetina: true,
                reuseTiles: true,
                attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>'
            }
        };

        // attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>'


        $scope.defaults = {
            tileLayer: "http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png",
            tileLayerOptions: {
                // opacity: 0.9,
                detectRetina: true,
                reuseTiles: true,
            }
        };

        $scope.navigateToStream = function(streamId) {
            console.log('navigating to... ', streamId);
            $state.go('streamSearch.specificStream', { streamId: streamId});
        };

        $scope.$on('leafletDirectiveMap.geojsonClick', function(event, target) {
            var streamId = target.properties.gid
            $scope.navigateToStream(streamId);
        });
  }]);
