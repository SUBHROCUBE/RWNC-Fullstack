'use strict';

angular.module('rwncApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modules.productionDetails', {
        url: '/production/details/:selectedOrderForProduction',
  	//params: [selectedOrderForProduction],
        templateUrl: 'app/modules/modules.productionDetails/modules.productionDetails.html',
        controller: 'ModulesProductionDetailsCtrl'
      });
  });
