'use strict';

angular.module('rwncApp')
  .controller('ModulesOrdersCtrl', ['$scope','$log','$state','httpRequest','orderService','getMasterData'
   ,function ($scope,$log,$state,httpRequest,orderService,getMasterData) {
      $scope.$parent.module="orders";
  		$scope.isFilterCollapsed=true;
      $scope.orderFilter={};
      $scope.pageSize=10;
      getMasterData.getType()
      .then(function(data){
        $scope.types=data;
      });
      getMasterData.getMaterial()
      .then(function(data){
        $scope.materials=data;
      });

    	$scope.openOrderDetails=function(order){
    		$state.go("modules.orderItem",{parentOrderId:order.parentOrderId});;
    	};
    	$scope.newOrder=function(){
        //clear previouse order record
        orderService.clearParentOrderId();
    		$state.go("modules.orderItem");
    	};

      var getFilteredOrders = function(filterObj){
        if(angular.isUndefined(filterObj))
          filterObj={};
        var api=config.api.orders;
        httpRequest.postData(api,filterObj)
        .then(function(data){
          console.log("Orders",data);
          $scope.orders=data.data;
        });
      };
      getFilteredOrders();
      $scope.clearFilters=function(){
        $scope.orderFilter={};
        getFilteredOrders();
      };
      $scope.applyFilters=function(){
        var filter={};
        if(angular.isDefined($scope.orderFilter.customer))
          filter.customerId=$scope.orderFilter.customer.customerId;

        if(angular.isDefined($scope.orderFilter.diameter))
          filter.itemDiameter=$scope.orderFilter.diameter

        if(angular.isDefined($scope.orderFilter.opening))
          filter.itemOpening=$scope.orderFilter.opening;

        if(angular.isDefined($scope.orderFilter.material)&& !angular.equals($scope.orderFilter.material, "ALL"))
          filter.itemMaterial=$scope.orderFilter.material;

        if(angular.isDefined($scope.orderFilter.type)&& !angular.equals($scope.orderFilter.type, "ALL"))
          filter.itemType=$scope.orderFilter.type;

        if(angular.isDefined($scope.orderFilter.orderStartdt))
          filter.orderDateFrom=$scope.orderFilter.orderStartdt;

        if(angular.isDefined($scope.orderFilter.orderTodt))
          filter.orderDateTo=$scope.orderFilter.orderTodt;

        if(angular.isDefined($scope.orderFilter.deliveryStartdt))
          filter.deliveryDateFrom=$scope.orderFilter.deliveryStartdt;

        if(angular.isDefined($scope.orderFilter.deliveryTotdt))
          filter.deliveryDateTo=$scope.orderFilter.deliveryTotdt;

        if(angular.isDefined($scope.orderFilter.status) && !angular.equals($scope.orderFilter.status, "ALL") )
          filter.orderStatus=$scope.orderFilter.status;

        getFilteredOrders(filter);       
      }
  }]);
 /* {
    "itemOpening": 20,
    "itemDiameter": 4,
    "itemLength": 5000,
    "itemWidth": 400,
    "itemMaterial": "ss 304",
    "itemType": "chain-link",
    "isRawReady": "ready",
    "isClamped": 0,
    "c_thickness": 5,
    "customerId": 1,
    "orderStatus": "DELIVERED",
    "orderDateTo": "2017-01-01",
    "orderDateFrom": "2012-01-01",
    "deliveryDateTo": "2017-01-01",
    "deliveryDateFrom": "2012-01-01"
}*/
