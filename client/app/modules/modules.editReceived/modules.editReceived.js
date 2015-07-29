'use strict';

angular.module('rwncApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modules.editReceived', {
        url: '/editReceived?type',
        templateUrl: 'app/modules/modules.editReceived/modules.editReceived.html',
        controller: 'ModulesEditReceivedCtrl'
      })
      .state('modules.NewReceived', {
        url: '/newReceived?type',
        templateUrl: 'app/modules/modules.editReceived/modules.editReceived.html',
        controller: 'ModulesNewReceivedCtrl'
      });
  });