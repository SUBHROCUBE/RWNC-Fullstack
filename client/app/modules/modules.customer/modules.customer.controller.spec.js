'use strict';

describe('Controller: ModulesCustomerCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var ModulesCustomerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModulesCustomerCtrl = $controller('ModulesCustomerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
