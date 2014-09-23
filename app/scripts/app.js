'use strict';

/**
 * @ngdoc overview
 * @name troutApp
 * @description
 * # troutApp
 *
 * Main module of the application.
 */
angular
  .module('troutApp', [
    'ngAnimate',
    'leaflet-directive',
    'LocalStorageModule',
    'ui.router'
  ])
  .config(['localStorageServiceProvider', '$stateProvider', function(localStorageServiceProvider, $stateProvider){
		localStorageServiceProvider.setPrefix('trout-dash');
	}]);
