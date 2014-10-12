'use strict';

/**
 * @ngdoc function
 * @name troutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the troutApp
 */
angular.module('troutApp')
  .controller('MainController', ['$scope', 'StreamApiService', 'leafletData', '$rootScope',	MainController]);

  function MainController($scope, StreamApiService, leafletData, $rootScope) {
  	$rootScope.$on('$routeChangeSuccess', function() {
  		
  	});

  	$rootScope.$on('selectedStreamChanged', function(newStream, oldStream) {
  		if (newStream == null && oldStream == null) {
  			return;
  		}

  		console.log(newStream);
  	});
  }
