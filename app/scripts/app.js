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
    'ngRoute'
  ])
  .config(['localStorageServiceProvider', '$routeProvider', '$locationProvider', function(localStorageServiceProvider, $routeProvider, $locationProvider){
		localStorageServiceProvider.setPrefix('trout-dash');
	}]);
