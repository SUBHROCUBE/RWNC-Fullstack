'use strict';

describe('Controller: ModulesEditCustomerCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var ModulesEditCustomerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModulesEditCustomerCtrl = $controller('ModulesEditCustomerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
