'use strict';

angular.module('rwncApp')
  .controller('ModulesEditStockCtrl', function ($scope,$state,$log,$stateParams,$validator,httpRequest,stockService) {
   
    //TO heighlight selected tab	
	$scope.$parent.module="stock";
	//Messages to user
	$scope.alerts=[];
    
    $scope.stock=stockService.getStockToEdit()
    $log.log($scope.stock)
    
    	//dismiss alerts from UI
	$scope.closeAlert = function(index) {
    	$scope.alerts.splice(index, 1);
  	};
    
      	//Submit form
	$scope.submit=function(){
		var url=config.api.editStock;
		//start validations
		$validator.validate($scope,'stock')
		.success(function() {
			//No error submit the form
          if($scope.stock.stockId){
			httpRequest.putData(url,$scope.stock)
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
    
  });
