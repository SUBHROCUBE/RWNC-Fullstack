'use strict';

describe('Controller: ModulesAddToProductionCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var ModulesAddToProductionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModulesAddToProductionCtrl = $controller('ModulesAddToProductionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
