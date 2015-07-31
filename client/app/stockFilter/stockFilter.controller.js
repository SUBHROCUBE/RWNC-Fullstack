'use strict';

angular.module('rwncApp')
  .controller('StockFilterCtrl', function ($scope,getMasterData,httpRequest,$log) {
    $scope.types=[];
    $scope.materials=[]
    $scope.stockFilter={};
    getMasterData.getType().then(function(data){
        $scope.types=data;
    });
   
    getMasterData.getMaterial().then(function(data){
        $scope.materials=data;
    })
    
    $scope.submit=function(){
        var api=config.api.allStocks;
        httpRequest.postData(api, $scope.stockFilter)
        .then(function(response){
          $scope.$parent.allStocks=response.data;
          $log.log(response);
        });
    }
  });
