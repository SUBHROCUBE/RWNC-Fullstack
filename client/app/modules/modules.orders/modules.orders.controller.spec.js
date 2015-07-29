'use strict';

describe('Controller: ModulesOrdersCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var ModulesOrdersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModulesOrdersCtrl = $controller('ModulesOrdersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
