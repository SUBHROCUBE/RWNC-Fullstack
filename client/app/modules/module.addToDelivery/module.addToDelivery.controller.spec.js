'use strict';

describe('Controller: ModuleAddToDeliveryCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var ModuleAddToDeliveryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModuleAddToDeliveryCtrl = $controller('ModuleAddToDeliveryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
