'use strict';

angular.module('rwncApp')
  .controller('ModulesEditReceivedCtrl', function ($scope,$validator,httpRequest,received,$log) {
    $scope.$parent.module="received";
    $scope.alerts=[];

    $scope.received=received.getReceivedToEdit();
    $log.log($scope.received)
    
    $scope.closeAlert = function(index) {
    	$scope.alerts.splice(index, 1);
  	};
    
          	//Submit form
	$scope.submit=function(){
		var url=config.api.received;
		//start validations
		$validator.validate($scope,'received')
		.success(function() {
			//No error submit the form
          if($scope.received.itemId){
			httpRequest.postData(url,$scope.received)
			.then(function(response){
				console.log(response);
				if(response.status==200){
					var alert={};
					alert.type='success';
					alert.msg='Received is successfully edited'
					$scope.alerts.push(alert);
				}
			});
		}	
          return;
        })
        .error(function() {
        	//Error: do nothing.	
          return console.log('error');
        });			
	};
    
  });
