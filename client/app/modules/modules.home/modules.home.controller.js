'use strict';

angular.module('rwncApp')
  .controller('ModulesHomeCtrl', ['$scope','$log','httpRequest', function($scope,$log,httpRequest){
 		$scope.$parent.module="home";
 		
 		$scope.recentOrders=[];
 		$scope.recentReceived=[];
 		$scope.recentLowStocks=[];
 		$scope.recentDeliveries=[];
 		
 		var getRecentOrders=function(){
 			httpRequest.get(config.api.recentOrders)
 			.then(function(response){
 				$log.log("recentOrders",response);
 				$scope.recentOrders=response.data;
 			});
 		};
 		var getRecentReceived=function(){
 			httpRequest.get(config.api.recentReceived)
 			.then(function(response){
 				$scope.recentReceived=response.data;
 				$log.log('recentReceived',response);
 			});
 		};
 		var getRecentLowStocks=function(){
 			httpRequest.get(config.api.recentLowStocks)
 			.then(function(response){
 				$scope.recentLowStocks=response.data;
 				$log.log('recentLowStocks',response);
 			});
 		};
 		var getRecentDeliveries=function(){
 			httpRequest.get(config.api.recentDeliveries)
 			.then(function(response){
 				$scope.recentDeliveries=response.data;
 				$log.log('recentDeliveries',response);
 			});
 		};

 		var loadHomePage=function(){
 			getRecentOrders();
 			getRecentReceived();
 			getRecentLowStocks();
 			getRecentDeliveries();
 		};
 		loadHomePage();
 }]);
