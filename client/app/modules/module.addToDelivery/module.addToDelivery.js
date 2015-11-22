'use strict';

angular.module('rwncApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('module.addToDelivery', {
        url: '/module.addToDelivery',
        templateUrl: 'app/module/module.addToDelivery/module.addToDelivery.html',
        controller: 'ModuleAddToDeliveryCtrl'
      });
  });
