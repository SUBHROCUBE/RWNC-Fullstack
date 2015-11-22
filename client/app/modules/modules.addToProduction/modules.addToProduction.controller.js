'use strict';

angular.module('rwncApp')
  .controller('ModulesAddToProductionCtrl',['$scope','$state','getMasterData','httpRequest', function ($scope,$state,getMasterData,httpRequest) {
  	$scope.$parent.module="production";
    $scope.addToProduction=function(){
    	$state.go('modules.productionDetails');
    };

      $scope.productionFilter={};
      $scope.pageSize=10;
      getMasterData.getType()
      .then(function(data){
        $scope.types=data;
      });
      getMasterData.getMaterial()
      .then(function(data){
        $scope.materials=data;
      });

      $scope.orders = [];
      var getFilteredOrders = function(filterObj){
	console.log(filterObj);
        if(angular.isUndefined(filterObj))
          filterObj={};
        var api=config.api.orders;
        httpRequest.postData(api,filterObj)
        .then(function(data){
          $scope.orders=data.data;
          console.log("orders",$scope.orders);
        });
      };
      getFilteredOrders();


  }]);
