'use strict';

angular.module('rwncApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modules.editCustomer', {
        url: '/customer/edit',
        templateUrl: 'app/modules/modules.editCustomer/modules.editCustomer.html',
        controller: 'ModulesEditCustomerCtrl'
      })
      .state('modules.newCustomer', {
        url: '/customer/new',
        templateUrl: 'app/modules/modules.editCustomer/modules.editCustomer.html',
        controller: 'ModulesNewCustomerCtrl'
      });
  });