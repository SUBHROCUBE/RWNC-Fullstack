'use strict';

angular.module('rwncApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modules.newDelivery', {
        url: '/modules/delivery/new',
        templateUrl: 'app/modules/module.newDelivery/module.newDelivery.html',
        controller: 'ModuleNewDeliveryCtrl'
      });
  });
