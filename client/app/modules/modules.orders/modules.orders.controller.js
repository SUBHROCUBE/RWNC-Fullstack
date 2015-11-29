'use strict';

angular.module('rwncApp')
  .controller('ModulesOrdersCtrl', ['$scope', '$log', '$state', 'httpRequest', 'orderService', 'getMasterData', 'getCustomers'
    , function ($scope, $log, $state, httpRequest, orderService, getMasterData, getCustomers) {
      $scope.$parent.module="orders";
  		$scope.isFilterCollapsed=true;
      $scope.orderFilter={
	itemMaterial:"ALL",
	itemType:"ALL",
	orderStatus:"ALL"		
	};
      $scope.pageSize=10;
      $scope.currentPage=1;
      var typeAheasCustomersSearch=getCustomers.getAllCustomers();
	   console.log("Customers",typeAheasCustomersSearch);
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
        //orderService.clearParentOrderId();
    		//$state.go("modules.orderItem");
	$state.go("modules.addItem",{"parentOrderId":null});
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
	  
	 var customerMasterList=[];
		$scope.allCustomers=[];
	
	  $scope.getFilteredCustomer=function(customerValue){
		console.log("Master Customers",customerMasterList);
		$scope.allCustomers=_.filter(customerMasterList, function(cust){ 
                                    return cust.alias.toLocaleLowerCase().includes(customerValue.toLocaleLowerCase());
                               });
		console.log("Filtered Customers",$scope.allCustomers);
		return $scope.allCustomers;
     };
	 
	  var getAllCustomers=function(){
        var api=config.api.allCustomers;
        httpRequest.get(api)
        .then(function(response){
          customerMasterList=response.data;
          $scope.allCustomers=response.data;
          $log.log(response);
        });
    }
	
	getAllCustomers();
	  
	  $scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
	  
      $scope.clearFilters=function(){
        $scope.orderFilter={};
        getFilteredOrders();
      };
  /* Date picker functionality */     
      
       $scope.today = function() {
            $scope.orderFilter.deliveryTotdt = new Date();
           $scope.orderFilter.deliveryStartdt = new Date();
          };
       
       //   $scope.today();

            $scope.status = {
            deliveryStatDtOpened: false,
            deliveryEndDtOpened: false,
                orderStatDtOpened: false,
           orderEndDtOpened: false
          };   

        $scope.deliveryStartDtOpen = function($event) {
         $event.preventDefault();
       $event.stopPropagation();
        $scope.status.deliveryStatDtOpened = true;
      };
        $scope.deliveryEndDtOpen = function($event) {
             $event.preventDefault();
           $event.stopPropagation();
            $scope.status.deliveryEndDtOpened = true;
          };
       
         $scope.orderStartDtOpen = function($event) {
         $event.preventDefault();
       $event.stopPropagation();
        $scope.status.orderStatDtOpened = true;
      };
        $scope.orderEndDtOpen = function($event) {
             $event.preventDefault();
           $event.stopPropagation();
            $scope.status.orderEndDtOpened = true;
          };

       $scope.format='dd-MMM-yy'
       
      $scope.applyFilters=function(){
        var filter={};

        if(angular.isDefined($scope.orderFilter.customer))
          filter.customerId=$scope.orderFilter.customer.id;

        if(angular.isDefined($scope.orderFilter.itemDiameter))
          filter.itemDiameter=$scope.orderFilter.itemDiameter

        if(angular.isDefined($scope.orderFilter.itemOpening))
          filter.itemOpening=$scope.orderFilter.itemOpening;

        if(angular.isDefined($scope.orderFilter.itemMaterial)&& !angular.equals($scope.orderFilter.itemMaterial, "ALL"))
          filter.itemMaterial=$scope.orderFilter.itemMaterial;

        if(angular.isDefined($scope.orderFilter.itemType)&& !angular.equals($scope.orderFilter.itemType, "ALL"))
          filter.itemType=$scope.orderFilter.itemType;

        if(angular.isDefined($scope.orderFilter.orderStartdt))
          filter.orderDateFrom=$scope.orderFilter.orderStartdt;

        if(angular.isDefined($scope.orderFilter.orderTodt))
          filter.orderDateTo=$scope.orderFilter.orderTodt;

        if(angular.isDefined($scope.orderFilter.deliveryStartdt))
          filter.deliveryDateFrom=$scope.orderFilter.deliveryStartdt;

        if(angular.isDefined($scope.orderFilter.deliveryTotdt))
          filter.deliveryDateTo=$scope.orderFilter.deliveryTotdt;

        if(angular.isDefined($scope.orderFilter.orderStatus) && !angular.equals($scope.orderFilter.orderStatus, "ALL") )
          filter.orderStatus=$scope.orderFilter.orderStatus;

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
