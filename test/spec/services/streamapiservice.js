'use strict';

describe('Service: streamApiService', function () {

  // load the service's module
  beforeEach(module('troutApp'));

  // instantiate service
  var streamApiService;
  beforeEach(inject(function (_streamApiService_) {
    streamApiService = _streamApiService_;
  }));

  it('should do something', function () {
    expect(!!streamApiService).toBe(true);
  });

});
