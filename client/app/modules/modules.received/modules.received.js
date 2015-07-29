'use strict';

angular.module('rwncApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modules.received', {
        url: '/received',
        templateUrl: 'app/modules/modules.received/modules.received.html',
        controller: 'ModulesReceivedCtrl'
      });
  });