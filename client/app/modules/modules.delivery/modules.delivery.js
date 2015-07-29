'use strict';

angular.module('rwncApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modules.delivery', {
        url: '/delivery',
        templateUrl: 'app/modules/modules.delivery/modules.delivery.html',
        controller: 'ModulesDeliveryCtrl'
      });
  });