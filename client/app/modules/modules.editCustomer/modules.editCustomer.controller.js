'use strict';

angular.module('rwncApp')
  .controller('ModulesEditCustomerCtrl', ['$scope','$state','$log','$stateParams','$validator','httpRequest','editCustomerHelper'
	,function($scope,$state,$log,$stateParams,$validator,httpRequest,editCustomerHelper){

	//TO heighlight selected tab	
	$scope.$parent.module="customer";
	//Messages to user
	$scope.alerts=[];

	//Not neccessary now
 	$scope.editForm={};
	$scope.editForm.form={};

	//Get customer to edit stored in service in detailed page.
	//If not available in service need to get it from seervice SERVICE NEEDED like get customer/:id
	$scope.customer=editCustomerHelper.getCustomerToEdit();
	$log.log($scope.customer);

	//dismiss alerts from UI
	$scope.closeAlert = function(index) {
    	$scope.alerts.splice(index, 1);
  	};
  	
  	//Submit form
	$scope.submit=function(){
		var url=config.api.customer;
		//start validations
		$validator.validate($scope,'customer')
		.success(function() {
			//No error submit the form
          if($scope.customer.id){
			httpRequest.putData(url,$scope.customer)
			.then(function(response){
				console.log(response);
				if(response.status==200){
					var alert={};
					alert.type='success';
					alert.msg='Customer edited successfully.'
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

}]);
