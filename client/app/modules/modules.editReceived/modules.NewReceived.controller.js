'use strict';

angular.module('rwncApp')
  .controller('ModulesNewReceivedCtrl', ['$scope','$log','$state','httpRequest','$validator'
   ,function ($scope,$log,$state,httpRequest,$validator) {
    $scope.$parent.module="received";
    $scope.received={}
    $scope.alerts=[]
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
       
    $scope.submit=function(){
    var url=config.api.received;
        
    //start validations
		$validator.validate($scope,'received')
		.success(function() {
			//No error submit the form
         
			httpRequest.postData(url,$scope.received)
			.then(function(response){
				console.log(response);
				if(response.status==200){
					var alert={};
					alert.type='success';
					alert.msg='Order received'
					$scope.alerts.push(alert);
				}
			});
	
          return;
        })
        .error(function() {
        	//Error: do nothing.	
          return console.log('error');
        });	
    }
}]);
