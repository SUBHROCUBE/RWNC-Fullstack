'use strict';

angular.module('rwncApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modules.home', {
        url: '/modules/home',
        templateUrl: 'app/modules/modules.home/modules.home.html',
        controller: 'ModulesHomeCtrl'
      });
  });