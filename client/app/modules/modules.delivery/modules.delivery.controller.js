'use strict';

angular.module('rwncApp')
  .controller('ModulesDeliveryCtrl', ['$scope','$state','$log','$stateParams',function ($scope,$state,$log,$stateParams) {
    $scope.newDelivery=function(){
    	$state.go('modules.newDelivery');

    };
  }]);
