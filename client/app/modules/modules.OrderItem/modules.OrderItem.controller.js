'use strict';

angular.module('rwncApp')
  .controller('ModulesOrderItemCtrl', ['$scope','$log','$state','$stateParams','httpRequest','orderService'
   ,function ($scope,$log,$state,$stateParams,httpRequest,orderService){
  	$scope.$parent.module="orders";
    $scope.itemList=[];

	$scope.alerts=orderService.getAlerts();
	
	 //dismiss alerts from UI
	$scope.closeAlert = function(index) {
    		$scope.alerts.splice(index, 1);
  	};

    $scope.addItem=function(){
      if(angular.isUndefined(parentOrderId)) return;
	console.log(parentOrderId);
    	$state.go("modules.addItem",{"parentOrderId":parentOrderId});
    };

    $scope.editItem=function(item){
    	$state.go("modules.editItem",{itemToEdit:item});
    };
    var parentOrderId=$stateParams.parentOrderId || orderService.getParentOrderId();
    $scope.parentOrderId=parentOrderId;
    /*console.log("---",parentOrderId);*/
    if(angular.isUndefined(parentOrderId) || parentOrderId==null){
      //i.e. if new Order
      //get new parentOrderId for server.TODO      
    }
    else{
      //Existing order get details from server            
      var api=config.api.orders;
      var filter={};
      filter.parentOrderId=parentOrderId;
      httpRequest.postData(api,filter)
      .then(function(data){
        $scope.itemList=data.data;
        /*console.log("Filterd bby parent",data)*/
      });
    }
  }]);
