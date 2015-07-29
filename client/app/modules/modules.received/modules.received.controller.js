'use strict';

angular.module('rwncApp')
  .controller('ModulesReceivedCtrl', ['$scope','$log','$state','httpRequest','received'
   ,function ($scope,$log,$state,httpRequest,received) {
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
       
    var getReceive=function(){
        var api=config.api.receives;
        httpRequest.postData(api)
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
