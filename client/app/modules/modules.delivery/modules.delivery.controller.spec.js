'use strict';

describe('Controller: ModulesDeliveryCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var ModulesDeliveryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModulesDeliveryCtrl = $controller('ModulesDeliveryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
