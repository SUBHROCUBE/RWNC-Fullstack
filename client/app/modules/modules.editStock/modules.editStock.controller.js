'use strict';

angular.module('rwncApp')
  .controller('ModulesEditStockCtrl',['$scope', '$state', '$log','$stateParams', 'httpRequest', 'stockService', function ($scope,$state,$log,$stateParams,httpRequest,stockService) {
   
    //TO heighlight selected tab	
	$scope.$parent.module="stock";
	//Messages to user
	$scope.alerts=[];
    
    $scope.stock=$stateParams.stockToEdit;
    console.log($scope.stock)
    
    	//dismiss alerts from UI
	$scope.closeAlert = function(index) {
    	$scope.alerts.splice(index, 1);
  	};
    
      	//Submit form
	$scope.updateStock=function(){
		console.log($scope.stock);
		var url=config.api.editStock;
			//No error submit the form
          if($scope.stock.stockId){
			httpRequest.putData(url,$scope.stock)
			.then(function(response){
				console.log(response);
				if(response.status==200){
					var alert={};
					alert.type='success';
					alert.msg='Stock edited successfully!'
					stockService.setAlerts(alert);
				}
			});
		}	
          return;			
	};
    
  }]);
