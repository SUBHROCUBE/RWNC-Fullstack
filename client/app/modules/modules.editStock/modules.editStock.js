'use strict';

angular.module('rwncApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modules.editStock', {
        url: '/stocks/edit',
        templateUrl: 'app/modules/modules.editStock/modules.editStock.html',
        controller: 'ModulesEditStockCtrl'
      });
  });