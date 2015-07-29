'use strict';

describe('Controller: ModulesHomeCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var ModulesHomeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModulesHomeCtrl = $controller('ModulesHomeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
