'use strict';

angular.module('rwncApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modules.production', {
        url: '/production',
        templateUrl: 'app/modules/modules.production/modules.production.html',
        controller: 'ModulesProductionCtrl'
      });
  });