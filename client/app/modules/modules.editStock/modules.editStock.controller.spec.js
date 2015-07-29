'use strict';

describe('Controller: ModulesEditStockCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var ModulesEditStockCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModulesEditStockCtrl = $controller('ModulesEditStockCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
