'use strict';

angular.module('rwncApp')
  .controller('ModulesAddItemCtrl', ['$scope','$log','$state','$stateParams','$validator','httpRequest','getMasterData','orderService'
   ,function ($scope,$log,$state,$stateParams,$validator,httpRequest,getMasterData,orderService) {
  	  $scope.$parent.module="orders";

  	  $scope.item={};
  	  $scope.item.itemRawReady="ready";	  

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



  	  getMasterData.getType()
      .then(function(data){
      	console.log(data);
        $scope.types=data ;
      });
      getMasterData.getMaterial()
      .then(function(data){
        $scope.materials=data;
      });
  	  var parentOrderId=$stateParams.parentOrderId;
  	  console.log(parentOrderId);
  	  $scope.createItem=function(){
  	  	//if(angular.isUndefined(parentOrderId)) return;
  	  	$validator.validate($scope,'item')
  	  	.then(function(success){
  	  			if(parentOrderId)
  	  				$scope.item.parentOrderId=parentOrderId;
  	  			$scope.item.customerId=1;  	  			
	 			//$scope.item.parentOrderId
  	  			console.log(JSON.stringify($scope.item));
  	  			var api=config.api.addEditOrder;
  	  			httpRequest.postData(api,$scope.item)
  	  			.then(function(data){
  	  				console.log(data);
  	  				if(data.status==200){
  	  					orderService.setParentOrderId(data.parentOrderId);	
  	  				}
  	  			}); 	  			
  	  		},
  	  		function(error){
  	  			//do nothing.
  	  		});
  	 }
  }])

  .controller('ModulesEditItemCtrl', function ($scope) {
    $scope.message = 'Hello';
  });;
