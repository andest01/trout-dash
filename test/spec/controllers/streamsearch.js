'use strict';

describe('Controller: StreamsearchCtrl', function () {

  // load the controller's module
  beforeEach(module('troutApp'));

  var StreamsearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StreamsearchCtrl = $controller('StreamsearchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
