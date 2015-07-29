'use strict';

describe('Controller: ModulesReceivedCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var ModulesReceivedCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModulesReceivedCtrl = $controller('ModulesReceivedCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
