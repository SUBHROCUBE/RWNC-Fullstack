'use strict';

angular.module('rwncApp')
  .controller('ModulesAddToProductionCtrl',['$scope','$state','getMasterData','httpRequest', function ($scope,$state,getMasterData,httpRequest) {
  	$scope.$parent.module="production";
    $scope.addToProduction=function(){
    	$state.go('modules.productionDetails');
    };

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

      $scope.applyFilters=function(){
        var filter={};

        if(angular.isDefined($scope.orderFilter.type)&& !angular.equals($scope.orderFilter.type, "ALL"))
          filter.itemType=$scope.orderFilter.type;

        if(angular.isDefined($scope.orderFilter.material) && !angular.equals($scope.orderFilter.material, "ALL"))
          filter.itemMaterial=$scope.orderFilter.material;

        if(angular.isDefined($scope.orderFilter.diameter) && $scope.orderFilter.diameter.length>0)
          filter.itemDiameter=$scope.orderFilter.diameter;

        if(angular.isDefined($scope.orderFilter.opening) && $scope.orderFilter.opening.length>0)
          filter.itemOpening=$scope.orderFilter.opening;

        getFilteredOrders(filter);       
      }

 	$scope.clearFilters=function(){
          var filter={};
	  getFilteredOrders(filter);       
          $scope.orderFilter = {};
      }

  }]);
