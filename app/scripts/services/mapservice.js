'use strict';

/**
 * @ngdoc service
 * @name troutApp.MapService
 * @description
 * # MapService
 * Factory in the troutApp.
 */
angular.module('troutApp')
  .factory('MapService', function () {
    function MapService() {

    }

    MapService.prototype = {
      _streams: ['winnebago', 'crooked', 'west beaver'],

      selectedStream: null,

      get currentStreams() {
        return this._streams;
      }
    };

    return MapService;
});
