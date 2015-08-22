'use strict';

angular.module('rwncApp')
  .controller('ModulesAddToProductionCtrl',['$scope','$state', function ($scope,$state) {
  	$scope.$parent.module="production";
    $scope.addToProduction=function(){
    	$state.go('modules.productionDetails');
    };
  }]);
