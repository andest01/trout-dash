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

        var proto = StreamApiService.prototype = new BaseApiService();

        proto.getStreams = function() {
        	var key = 'streams';
        	if (this.cache.get(key)) {
                var cachedStreamsDeferred = $q.defer();
                var cachedStreams =  this.cache.get(key);
                cachedStreamsDeferred.resolve(cachedStreams);
                return cachedStreamsDeferred.promise;
        	}
        	
    		var gettingStreams = this.doCall({}, 'data/minnesota/DaveIsWrong.geojson');
    		gettingStreams.then(function(response) {
                this.cache.set(key, response);
                return response;
    		}.bind(this));

            // this.cache.set(key, gettingStreams);
    		return gettingStreams;
    	};

        proto.getStream = function(streamId) {
        		console.log(streamId);
        };

        return new StreamApiService();
  }]);
