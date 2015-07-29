'use strict';

describe('Controller: ModulesEditReceivedCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var ModulesEditReceivedCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModulesEditReceivedCtrl = $controller('ModulesEditReceivedCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
