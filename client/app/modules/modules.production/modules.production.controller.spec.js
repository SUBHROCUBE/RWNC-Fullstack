'use strict';

describe('Controller: ModulesProductionCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var ModulesProductionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModulesProductionCtrl = $controller('ModulesProductionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
