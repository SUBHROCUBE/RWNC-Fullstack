'use strict';

describe('Service: httpRequest', function () {

  // load the service's module
  beforeEach(module('rwncApp'));

  // instantiate service
  var httpRequest;
  beforeEach(inject(function (_httpRequest_) {
    httpRequest = _httpRequest_;
  }));

  it('should do something', function () {
    expect(!!httpRequest).toBe(true);
  });

});
