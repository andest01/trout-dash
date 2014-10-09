'use strict';

describe('Directive: streamListItem', function () {

  // load the directive's module
  beforeEach(module('troutApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<stream-list-item></stream-list-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the streamListItem directive');
  }));
});
