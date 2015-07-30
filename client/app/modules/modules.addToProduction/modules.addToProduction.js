'use strict';

angular.module('rwncApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modules.addToProduction', {
        url: '/production/add/',
        templateUrl: 'app/modules/modules.addToProduction/modules.addToProduction.html',
        controller: 'ModulesAddToProductionCtrl'
      });
  });