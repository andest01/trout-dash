'use strict';

/**
 * @ngdoc overview
 * @name troutApp
 * @description
 * # troutApp
 *
 * Main module of the application.
 */
var troutApp = angular
  .module('troutApp', [
    'ngAnimate',
    'leaflet-directive',
    'LocalStorageModule',
    'ngRoute'
  ]);
  troutApp.config(['localStorageServiceProvider', '$routeProvider', '$locationProvider', 
  		function(localStorageServiceProvider, $routeProvider, $locationProvider){
		localStorageServiceProvider.setPrefix('trout-dash');
		console.log('lolol');
		$routeProvider
			.when('/blog', {
				templateUrl: '../views/blog.html',
				controller: 'BlogCtrl'
			})
			.when('/blog/:blogId', {
				templateUrl: '../views/blog.html',
				controller: 'BlogCtrl'
			})
			.when('/tips', {
				templateUrl: '../views/tips.html',
				controller: 'TipsCtrl'
			})
			.when('/streams', {
				templateUrl: '../views/streamSearch.html',
				controller: 'StreamsearchCtrl'
			})
			.when('/streams/:region', {
				templateUrl: '../views/streamSearch.html',
				controller: 'StreamsearchCtrl'
			})
			.when('/streams/:region/:watershed', {
				templateUrl: '../views/streamSearch.html',
				controller: 'StreamsearchCtrl'
			})
			.when('/streams/:region/:watershed/:id', {
				templateUrl: '../views/streamSearch.html',
				controller: 'StreamsearchCtrl'
			})
			.otherwise({
				redirectTo: '/streams'
		});

			console.log('finished');
	}]);
