'use strict';

angular.module('rwncApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modules.customer', {
        url: '/customer',
        templateUrl: 'app/modules/modules.customer/modules.customer.html',
        controller: 'ModulesCustomerCtrl'
      });
  });