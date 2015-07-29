'use strict';

describe('Controller: ModulesNewReceivedCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var ModulesNewReceivedCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModulesNewReceivedCtrl = $controller('ModulesNewReceivedCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
