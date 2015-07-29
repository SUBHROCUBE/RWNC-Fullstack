'use strict';

describe('Controller: ModulesStocksCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var ModulesStocksCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModulesStocksCtrl = $controller('ModulesStocksCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
