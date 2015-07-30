'use strict';

angular.module('rwncApp')
  .controller('ModulesOrderItemCtrl', ['$scope','$log','$state','$stateParams','httpRequest','editCustomerHelper'
   ,function ($scope,$log,$state,$stateParams,httpRequest,editCustomerHelper){
  	$scope.$parent.module="orders";    
    $scope.addItem=function(){
      if(angular.isUndefined(parentOrderId)) return;
    	$state.go("modules.addItem",{"parentOrderId":parentOrderId});
    }

    $scope.editItem=function(item){
    	$state.go("modules.editItem");
    }
    var parentOrderId=$stateParams.parentOrderId;
    if(angular.isUndefined(parentOrderId)){
      //i.e. if new Order
      //get new parentOrderId for server.TODO
      parentOrderId=12;

    }
  }]);
