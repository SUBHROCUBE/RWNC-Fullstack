'use strict';

describe('Controller: ModulesNewCustomerCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var ModulesNewCustomerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModulesNewCustomerCtrl = $controller('ModulesNewCustomerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
