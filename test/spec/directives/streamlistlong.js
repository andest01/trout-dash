'use strict';

describe('Directive: streamListLong', function () {

  // load the directive's module
  beforeEach(module('troutApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<stream-list-long></stream-list-long>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the streamListLong directive');
  }));
});
