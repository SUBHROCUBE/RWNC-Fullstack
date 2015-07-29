'use strict';

angular.module('rwncApp')
  .controller('ModulesReceivedCtrl', ['$scope','$log','$state','httpRequest','editCustomerHelper'
   ,function ($scope,$log,$state,httpRequest,editCustomerHelper) {
    $scope.$parent.module="received";
    $scope.openStart=function($event){
     	$event.preventDefault();
    	$event.stopPropagation();
     	$scope.StartOpened=true;
     };
     $scope.openTo=function($event){
     	$event.preventDefault();
    	$event.stopPropagation();
     	$scope.ToOpened=true;
     };
}]);
