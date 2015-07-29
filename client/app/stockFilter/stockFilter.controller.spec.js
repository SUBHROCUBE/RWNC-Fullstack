'use strict';

describe('Controller: StockFilterCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var StockFilterCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StockFilterCtrl = $controller('StockFilterCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
