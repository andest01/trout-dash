'use strict';

describe('Directive: streamListShort', function () {

  // load the directive's module
  beforeEach(module('troutApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<stream-list-short></stream-list-short>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the streamListShort directive');
  }));
});
