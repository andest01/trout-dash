'use strict';

/**
 * @ngdoc function
 * @name troutApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the troutApp
 */
angular.module('troutApp')
  .controller('MapCtrl', ['$scope', 'StreamApiService', function ($scope, StreamApiService) {
        StreamApiService.getStreams('minnesota', 'saintCroix')
        .then(function(data) {
            $scope.geojson = { 
                data: data,
                style: {
                    fillColor: 'green',
                    weight: 1,
                    opacity: 1,
                    color: 'blue'
                }
            };
        });

        $scope.center = {
            lat: 43.35713822211053,
            lng: -92.1533203125,
            zoom: 7
        };

        $scope.tile = {
            url: "http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png",
            options: {
                attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>'
            }
        };

        // attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>'


        $scope.defaults = {
            tileLayer: "http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png",
            tileLayerOptions: {
                opacity: 0.9,
                detectRetina: true,
                reuseTiles: true,
            }
        };
  }]);
