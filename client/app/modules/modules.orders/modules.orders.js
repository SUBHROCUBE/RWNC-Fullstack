'use strict';

angular.module('rwncApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modules.orders', {
        url: '/orders',
        templateUrl: 'app/modules/modules.orders/modules.orders.html',
        controller: 'ModulesOrdersCtrl'
      });
  });