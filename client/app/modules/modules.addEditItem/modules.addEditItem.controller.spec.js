'use strict';

describe('Controller: ModulesAddEditItemCtrl', function () {

  // load the controller's module
  beforeEach(module('rwncApp'));

  var ModulesAddEditItemCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModulesAddEditItemCtrl = $controller('ModulesAddEditItemCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
