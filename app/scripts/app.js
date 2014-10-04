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
			.otherwise({
				redirectTo: '/blog'
		});

			console.log('finished');
	}]);
