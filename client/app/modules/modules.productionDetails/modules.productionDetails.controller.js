'use strict';

angular.module('rwncApp')
  .controller('ModulesProductionDetailsCtrl', function ($scope) {
  	$scope.$parent.module="production";
  	$scope.datePicker={expStart:false};  	
  	$scope.openDatePopUp=function($event,dateVar){
  		console.log(";;;;")
  		$event.preventDefault();
    	$event.stopPropagation();
    	console.log($scope.datePicker);
     	$scope.datePicker[dateVar]=true;
  	}
    
  });
