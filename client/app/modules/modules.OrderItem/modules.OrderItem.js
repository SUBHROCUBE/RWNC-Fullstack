'use strict';

angular.module('rwncApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modules.orderItem', {
        url: '/order/:parentOrderId/orderItem',
        param:{parentOrderId:''},
        templateUrl: 'app/modules/modules.OrderItem/modules.OrderItem.html',
        controller: 'ModulesOrderItemCtrl'
      });
  });