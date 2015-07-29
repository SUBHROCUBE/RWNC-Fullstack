'use strict';

describe('Controller: ModulesCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var ModulesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModulesCtrl = $controller('ModulesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
