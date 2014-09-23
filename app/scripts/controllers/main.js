'use strict';

/**
 * @ngdoc function
 * @name troutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the troutApp
 */
angular.module('troutApp')
  .controller('MainController', ['$scope', 'StreamApiService', 'leafletData', function ($scope, StreamApiService, leafletData) {
    angular.extend($scope, {
        defaults: {
          scrollWheelZoom: false,
          crs: 'EPSG3857'
        }
    });
    StreamApiService.getStreams()
        .then(function(data) {
            console.log(data);
            debugger;
            $scope.geojson = {
                data: data,
                style: {
                    fillColor: "green",
                    weight: 2,
                    opacity: 1,
                    color: 'red',
                    dashArray: '3',
                    fillOpacity: 0.7
                }
            };
        });

    // function _changeMapCRS(map, crs) {
    //   map.options.crs = crs;
    //   map._initialTopLeftPoint = map._getNewTopLeftPoint(map.getCenter());
    // }
    // leafletData.getMap().then(function(map) {
    //   _changeMapCRS(map, L.CRS.EPSG3857);
    // });  
  }]);
