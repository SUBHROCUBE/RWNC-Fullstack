'use strict';

angular.module('rwncApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modules.addItem', {
        url: '/order/:parentOrderId/addItem',
        templateUrl: 'app/modules/modules.addEditItem/modules.addEditItem.html',
        controller: 'ModulesAddItemCtrl'
      })
      .state('modules.editItem', {
        url: '/order/orderItem/editItem',
        templateUrl: 'app/modules/modules.addEditItem/modules.addEditItem.html',
        params: {itemToEdit:{}},
        controller: 'ModulesEditItemCtrl'
      });
  });
