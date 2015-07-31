'use strict';

describe('Service: getCustomers', function () {

  // load the service's module
  beforeEach(module('rwncApp'));

  // instantiate service
  var getCustomers;
  beforeEach(inject(function (_getCustomers_) {
    getCustomers = _getCustomers_;
  }));

  it('should do something', function () {
    expect(!!getCustomers).toBe(true);
  });

});
