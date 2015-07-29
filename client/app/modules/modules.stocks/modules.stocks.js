'use strict';

angular.module('rwncApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modules.stocks', {
        url: '/stocks',
        templateUrl: 'app/modules/modules.stocks/modules.stocks.html',
        controller: 'ModulesStocksCtrl'
      });
  });