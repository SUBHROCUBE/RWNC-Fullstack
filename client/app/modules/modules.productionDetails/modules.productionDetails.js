'use strict';

angular.module('rwncApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modules.productionDetails', {
        url: '/production/details/',
        templateUrl: 'app/modules/modules.productionDetails/modules.productionDetails.html',
        controller: 'ModulesProductionDetailsCtrl'
      });
  });