'use strict';

angular.module('rwncApp')
  .controller('ModulesStocksCtrl', function ($scope) {
    $scope.$parent.module="stocks";
    $scope.isFilterCollapsed=true;
  	$scope.opened=false;
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
  });
