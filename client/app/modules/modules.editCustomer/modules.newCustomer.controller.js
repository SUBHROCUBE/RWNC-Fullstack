'use strict';

angular.module('rwncApp')
  .controller('ModulesNewCustomerCtrl', ['$scope','$log','$validator','httpRequest','editCustomerHelper' 
	,function($scope,$log,$validator,httpRequest,editCustomerHelper){
	
	//TO heighlight selected tab
	$scope.$parent.module="customer";
	//Messages to user
	$scope.alerts=[];
	//customer data binding with UI.
	$scope.customer={};
	//Dismiss messages displayed
	$scope.closeAlert = function(index) {
    	$scope.alerts.splice(index, 1);
  	};
  	//Form sublit function
	$scope.submit=function(){
		//start validaiont
		$validator.validate($scope,'customer')
		.success(function() {
			//submit is success.
          	var url=config.api.customer;				
			httpRequest.postData(url,$scope.customer)
			.then(function(response){
				console.log(response);
				if(response.status==200){
					var alert={};
					alert.type='success';
					alert.msg='Customer added successfully.'
					editCustomerHelper.setAlerts(alert);
					$state.go('modules.customer');
				}
			})
			.catch(function(fallback) {
			var alert={};
			alert.type='danger';
			alert.msg='Customer not added.'
			editCustomerHelper.setAlerts(alert);
			$state.go('modules.customer');
			});	
          return;
        })
        .error(function() {
        	//do nothing if error		
          return console.log('error');
        });					
	};
}]);
 