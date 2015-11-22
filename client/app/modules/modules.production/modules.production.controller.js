'use strict';

angular.module('rwncApp')
  .controller('ModulesProductionCtrl', ['$scope','$state','$timeout','getCustomers','getMasterData','httpRequest',function ($scope,$state,$timeout,getCustomers,getMasterData,httpRequest) {
    $scope.$parent.module="production";
    
    $scope.goToAddToProductionPage=function(){
    	$state.go('modules.addToProduction');	
    }

    $scope.customers = getCustomers.getAllCustomers();

      $scope.productionFilter={};
      $scope.pageSize=10;
      getMasterData.getType()
      .then(function(data){
        $scope.types=data;
      });
      getMasterData.getStatuses()
      .then(function(data){
        $scope.statuses=data;
      });

      var getFilteredproductions = function(filterObj){
	console.log(filterObj);
        if(angular.isUndefined(filterObj))
          filterObj={};
        var api=config.api.productions;
        httpRequest.postData(api,filterObj)
        .then(function(data){
          $scope.productions=data.data;
          console.log("productions",$scope.productions);
        });
      };
      getFilteredproductions();

       $scope.applyFilters=function(){
        var filter={};

        if(angular.isDefined($scope.productionFilter.customer))
          filter.customerId=$scope.productionFilter.customer.id;

        if(angular.isDefined($scope.productionFilter.orderId))
          filter.orderId=$scope.productionFilter.orderId

        if(angular.isDefined($scope.productionFilter.type)&& !angular.equals($scope.productionFilter.type, "ALL"))
          filter.itemType=$scope.productionFilter.type;

        if(angular.isDefined($scope.productionFilter.productionStatus)&& !angular.equals($scope.productionFilter.productionStatus, "ALL"))
          filter.productionStatus=$scope.productionFilter.productionStatus;

        getFilteredproductions(filter);       
      }

 	$scope.clearFilters=function(){
          var filter={};
	  getFilteredproductions(filter);       
          $scope.productionFilter = {};
      }
  }]);
