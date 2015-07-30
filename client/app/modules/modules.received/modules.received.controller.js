'use strict';

angular.module('rwncApp')
  .controller('ModulesReceivedCtrl', ['$scope','$log','$state','httpRequest','received','getCustomers'
   ,function ($scope,$log,$state,httpRequest,received,getCustomers) {
    $scope.$parent.module="received";
       var receiveList=[];
       $scope.receives=[]
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
    $scope.customers=getCustomers.getAllCustomers();
    $log.log($scope.selectedCustomer)
    
    $scope.serchCustomer=function(){
        var custId=$scope.selectedCustomer.id;
        getReceive({customerId:custId})
    }
    
    var getReceive=function(obj){
        var api=config.api.receives;
        httpRequest.postData(api,obj)
        .then(function(response){
          receiveList=response.data;
          $scope.receives=response.data;
          $log.log(response);
        });
    }
    
     $scope.editReceive=function(receive){
        received.setReceivedToEdit(receive);
        $state.go('modules.editReceived',{receivedId:receive.receivedId});
     };
    
    getReceive();
}]);
