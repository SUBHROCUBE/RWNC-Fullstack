'use strict';

angular.module('rwncApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modules.productionDetails', {
        url: '/production/details',
  	params: {selectedOrderForProduction: null},
        templateUrl: 'app/modules/modules.productionDetails/modules.productionDetails.html',
        controller: 'ModulesProductionDetailsCtrl'
      });
  });
