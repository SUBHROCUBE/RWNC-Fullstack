'use strict';

describe('Service: getMasterData', function () {

  // load the service's module
  beforeEach(module('rwncApp'));

  // instantiate service
  var getMasterData;
  beforeEach(inject(function (_getMasterData_) {
    getMasterData = _getMasterData_;
  }));

  it('should do something', function () {
    expect(!!getMasterData).toBe(true);
  });

});
