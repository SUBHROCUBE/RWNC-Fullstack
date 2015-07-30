'use strict';

angular.module('rwncApp')
  .controller('ModulesAddItemCtrl', ['$scope','$log','$state','$stateParams','$validator','httpRequest','getMasterData','orderService'
   ,function ($scope,$log,$state,$stateParams,$validator,httpRequest,getMasterData,orderService) {
  	  $scope.itme={};
  	  $scope.$parent.module="orders";
  	  getMasterData.getType()
      .then(function(data){
      	console.log(data);
        $scope.types=data.data;
      });
      getMasterData.getMaterial()
      .then(function(data){
        $scope.materials=data.data;
      });
  	  var parentOrderId=$stateParams.parentOrderId;
  	  console.log(parentOrderId);
  	  $scope.createItem=function(){
  	  	//if(angular.isUndefined(parentOrderId)) return;
  	  	$validator.validate($scope,'item')
  	  	.then(function(success){
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
