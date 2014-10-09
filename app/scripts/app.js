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
    'ui.router'
    // 'ngRoute'
  ]);
  troutApp.config(['localStorageServiceProvider', '$stateProvider', '$urlRouterProvider',
  		function(localStorageServiceProvider, $stateProvider, $urlRouterProvider){
			localStorageServiceProvider.setPrefix('trout-dash');
			// $urlRouterProvider.otherwise('/state1');

			$urlRouterProvider.when('', 'streamSearch');

			$stateProvider
				.state('streamSearch', {
					url: '/streams',
					templateUrl: '../views/streamSearch.html',
					controller: 'StreamsearchCtrl'
				})
				.state('streamSearch.specificStream', {
					url: '/streams/{streamId}',
					templateUrl: '../views/streamSearch.html',
					controller: 'StreamsearchCtrl'
				})
				// .state('streamSearch.map', {
				// 	url: '/streams',
				// 	templateUrl: '../views/streamSearch.html'
				// })
				// .state('state1.list', {
				// 	url: '/list',
				// 	templateUrl: 'partials/state1.list.html',
				// 	controller: function($scope) {
				// 		$scope.items = ['A', 'List', 'Of', 'Items'];
				// 	}
				// })
				.state('blog', {
					url: '/blog',
					templateUrl: '../views/blog.html',
					controller: 'BlogCtrl'
				})
				.state('tips', {
					url: '/tips',
					templateUrl: '../views/tips.html',
					controller: 'TipsCtrl'
				});
			console.log('finished');
	}]).run(['$rootScope', '$urlRouter', '$location', '$state', function ($rootScope, $urlRouter, $location, $state) {
    $rootScope.$on('$locationChangeSuccess', function(e, newUrl, oldUrl) {
      // Prevent $urlRouter's default handler from firing
      e.preventDefault();
      console.log('new url: ',newUrl);
      /** 
       * provide conditions on when to 
       * sync change in $location.path() with state reload.
       * I use $location and $state as examples, but
       * You can do any logic
       * before syncing OR stop syncing all together.
       */

      if ($state.current.name !== 'main.exampleState' || newUrl === 'http://some.url' || oldUrl !=='https://another.url') {
        // your stuff
        console.log('syncing');
        $urlRouter.sync();
      } else {
      	console.log('not syncing');
        // don't sync
      }
    });
    // Configures $urlRouter's listener *after* your custom listener
    $urlRouter.listen();
  }]);
