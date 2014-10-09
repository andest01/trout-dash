'use strict';

/**
 * @ngdoc directive
 * @name troutApp.directive:streamListItem
 * @description
 * # streamListItem
 */
angular.module('troutApp')
  .directive('streamListItem', function () {
    return {
      templateUrl: '../views/streamlistitem.html',
      restrict: 'E',
      link: function postLink(scope /*, element, attrs*/) {
      	var p = scope.stream.properties;
      	scope.viewModel = {
      		id: p.gid,
      		name: p.kittle_nam,
      		link: '/streams/' + p.gid,
      		length: p.length
      	};
        console.log(scope.viewModel.link);
      }
    };
  });
