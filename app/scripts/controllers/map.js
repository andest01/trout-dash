'use strict';

/**
 * @ngdoc function
 * @name troutApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the troutApp
 */

 var MAP_ELEMENT_ID = 'map';

angular.module('troutApp')
  .controller('MapCtrl', ['$scope', 'StreamApiService', '$stateParams', '$state', '$q', '$location', function ($scope, StreamApiService, $stateParams, $state, $q, $location) {

        $scope.streamLocations = [];

        $scope.$watch('selectedStreamId', function(newStreamId, oldStreamId) {
            if (newStreamId == null || newStreamId <= 0) {
                return;
            }

            if (newStreamId === oldStreamId) {
                return;
            }

            console.log('new stream id: ', newStreamId);
            // var soughtFeatures = $scope.streamLocations.filter(function(feature) {
            //     var isMatch = feature.id === newStreamId;
            //     return isMatch;
            // });

            // if (soughtFeatures.length !== 1) {
            //     return;
            // }

            // var soughtFeature = soughtFeatures[0];
            var soughtFeature = $scope.getLayer(newStreamId);

            $scope.map.fitBounds(soughtFeature.layer);
        });

        $scope.getLayer = function(soughtStreamId) {
            var soughtFeatures = $scope.streamLocations.filter(function(feature) {
                var isMatch = feature.id === soughtStreamId;
                return isMatch;
            });

            if (soughtFeatures.length !== 1) {
                return;
            }

            var soughtFeature = soughtFeatures[0];

            return soughtFeature;
        };

        StreamApiService.getStreams('minnesota', 'saintCroix')
        .then(function(data) {
            if ($scope.selectedStreamId == null) {
                return;
            }

            var stamenTiles = L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
              maxZoom: 18,
              attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>'
            });

            var streams = L.geoJson(data, {
              style: function (feature) {
                return {
                  color: '#4E7F84',
                  fill: false,
                  opacity: 1,
                  clickable: true,
                  weight: 3
                };
              },
              onEachFeature: function (feature, layer) {
                $scope.streamLocations.push({
                    bounds: layer.getBounds(),
                    layer: layer,
                    id: feature.properties.gid,
                    name: feature.properties.name
                });

                layer.on({
                    click: function (event, l) {
                        var feature = event.target.feature;
                        var streamId = feature.properties.gid;
                        console.log('clicked stream: ', feature, streamId);
                        $scope.navigateToStream(streamId);

                    },
                    mouseOver: function(event) {
                        console.log('mouse over');
                        var layer = e.target;

                        layer.setStyle({
                            weight: 8,
                        });

                        if (!L.Browser.ie && !L.Browser.opera) {
                            layer.bringToFront();
                        }
                    },

                    mouseOut: function(event) {
                        var feature = event.target.feature;
                        var streamId = feature.properties.gid;
                        var currentStreamId = $scope.getStreamId();
                        if (currentStreamId !== streamId) {
                            $scope.streams.resetStyle(e.target);
                        }
                    }
                });
              }
            });

            $scope.mapSettings = {
                zoom: 6,
                center: [46.05713822211053, -92.1533203125],
                layers: [stamenTiles, streams],
                zoomControl: true,
                attributionControl: false
            };

            $scope.map = L.map('map', $scope.mapSettings);
            var currentStream = $scope.getStreamId();
            if (currentStream != null && currentStream > 0) {
                var soughtLayer = $scope.getLayer(currentStream);
                $scope.map.fitBounds(soughtLayer.layer);
            }
        });

      
  }]);
