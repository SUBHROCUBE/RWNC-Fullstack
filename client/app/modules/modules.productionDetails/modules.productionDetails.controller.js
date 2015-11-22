'use strict';

angular.module('rwncApp')
  .controller('ModulesProductionDetailsCtrl', function ($scope, $stateParams, $state) {
	$scope.selectedOrderItemForProduction = $stateParams.selectedOrderForProduction;
	console.log($stateParams.selectedOrderForProduction);

  	$scope.$parent.module="production";
  	$scope.datePicker={expStart:false};  	
  	$scope.openDatePopUp=function($event,dateVar){
  		console.log(";;;;")
  		$event.preventDefault();
    		$event.stopPropagation();
    		console.log($scope.datePicker);
     		$scope.datePicker[dateVar]=true;
  	}
	console.log($scope.selectedOrderForProduction);
    
  });
