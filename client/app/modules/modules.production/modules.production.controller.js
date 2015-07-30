'use strict';

angular.module('rwncApp')
  .controller('ModulesProductionCtrl', ['$scope','$state',function ($scope,$state) {
    $scope.$parent.module="production";
    
    $scope.addToOrder=function(){
    	$state.go('modules.addToProduction');	
    }   

  }]);
