'use strict';

describe('Controller: ModulesOrderItemCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var ModulesOrderItemCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModulesOrderItemCtrl = $controller('ModulesOrderItemCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
