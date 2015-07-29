'use strict';

angular.module('rwncApp')
  .controller('ModulesStocksCtrl', function ($scope,httpRequest,$log,stockService,$state) {
    $scope.$parent.module="stocks";
    $scope.isFilterCollapsed=true;
  	$scope.opened=false;
    var stockList=[];
    $scope.allStocks=[];
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
    
    var getStocks=function(){
        var api=config.api.allStocks;
        httpRequest.postData(api)
        .then(function(response){
          stockList=response.data;
          $scope.allStocks=response.data;
          $log.log(response);
        });
    }
    
     $scope.editStock=function(stock){
        stockService.setSTockToEdit(stock);
        $state.go('modules.editStock',{stockId:stock.stockId});
     };
    
    getStocks();
    
  });
