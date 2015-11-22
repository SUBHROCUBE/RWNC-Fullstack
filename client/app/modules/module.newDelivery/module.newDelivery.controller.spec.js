'use strict';

describe('Controller: ModuleNewDeliveryCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var ModuleNewDeliveryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModuleNewDeliveryCtrl = $controller('ModuleNewDeliveryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
