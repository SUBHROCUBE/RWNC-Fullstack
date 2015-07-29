'use strict';

describe('Service: received', function () {

  // load the service's module
  beforeEach(module('rwncApp'));

  // instantiate service
  var received;
  beforeEach(inject(function (_received_) {
    received = _received_;
  }));

  it('should do something', function () {
    expect(!!received).toBe(true);
  });

});
