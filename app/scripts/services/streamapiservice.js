'use strict';

/**
 * @ngdoc service
 * @name troutApp.StreamApiService
 * @description
 * # StreamApiService
 * Factory in the troutApp.
 */


angular.module('troutApp')
  .factory('StreamApiService', ['$q', 'BaseApiService', function ($q, BaseApiService) {
  		function StreamApiService() {
            BaseApiService.call(this);
        }

        var DATA_ROOT = 'data/';

        var createRoute = function(state, region) {
            var route = DATA_ROOT + state + '/' + region + '-geo.json';
            return route;
        };

        var createKey = function(state, region) {
            if (region == null || state == null) {
                throw new Error('region cannot be null');
            }
            return 'streams/' + state + '/' + region;
        };

        var proto = StreamApiService.prototype = new BaseApiService();

        proto.getStreams = function(state, region) {
        	var key = createKey(state, region);
        	if (this.cache.get(key)) {
                var cachedStreamsDeferred = $q.defer();
                var cachedStreams =  this.cache.get(key);
                cachedStreamsDeferred.resolve(cachedStreams);
                return cachedStreamsDeferred.promise;
        	}
        	
            var soughtRoute = createRoute(state, region);
            console.log('soughtRoute: ', soughtRoute);
    		return this.doCall({}, soughtRoute)
                .then(function(response) {
                    this.cache.set(key, response);
                    return response;
                }.bind(this));
    	};

        proto.deleteAllStreams = function(state, region) {
            var key = createKey(state, region);
            if (this.cache.get(key)) {
                this.cache.remove(key);
            }
        };

        proto.getStream = function(state, region, streamId) {
    		console.log(streamId);
        };

        return new StreamApiService();
  }]);
