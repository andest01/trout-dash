'use strict';

/**
 * @ngdoc service
 * @name troutApp.BaseApiService
 * @description
 * # BaseApiService
 * Factory in the troutApp.
 */
angular.module('troutApp')
  .factory('BaseApiService', ['$rootScope', 'localStorageService', '$http', function ($rootScope, localStorageService, $http) {
    var globalCache = localStorageService;
    // console.log('cache info: ', globalCache.info());
    function BaseApiService() {
            this.cache = globalCache;
            // $rootScope.$on('BUST_CACHE', this.bustCache.bind(this));
    }

    BaseApiService.prototype = {
        /**
         * Cache object for storing read-only type requests
         * @property cache
         * @type {Object}
         */
        cache: null,

        /**
         * Reset the global cache
         */
        resetCache: function() {
            globalCache.removeAll();
        },

        /**
         * Stub method for child classes that need to have their caches busted when an analysis is refreshed
         * @param  {ng.$event} event
         * @param  {AnalysisModel} analysisModel
         */
        bustCache: function(/*event, analysisModel*/) {
            return;
        },

        /**
         * Perform an API request.  Defaults to AJAX
         * @method doCall
         * @param  {Object} data The unique data to this request
         * @param  {String} API endpoint
         * @return {jQuery.Deferred}
         */
        doCall: function(data, endpoint, cache) {
            cache = false;

            var config = {
                url: BaseApiService.API_BASE_PATH + endpoint,
                params: data,
                cache: cache,
                method: 'GET'
            };

            return $http(config)
                .then(function(response) {
                  return response.data;
                });
        },
    };

    /**
     * URL prefix for API endpoints
     * @type {String}
     * @constant
     */
    BaseApiService.API_BASE_PATH = '';

    return BaseApiService;


  }]);
