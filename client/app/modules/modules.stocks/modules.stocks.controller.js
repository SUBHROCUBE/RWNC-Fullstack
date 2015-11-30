'use strict';

angular.module('rwncApp')
  .controller('ModulesStocksCtrl',['$scope', '$log', '$state', 'httpRequest', 'stockService', 'getMasterData', 'getCustomers', function ($scope, $log, $state, httpRequest, stockService, getMasterData, getCustomers) {
    $scope.$parent.module="stocks";
    $scope.isFilterCollapsed=true;
  	$scope.opened=false;
    var stockList=[];
    $scope.allStocks=[];
	
	$scope.alerts=stockService.getAlerts();
	
	$scope.closeAlert = function(index) {
    		$scope.alerts.splice(index, 1);
  	};
	
	$scope.stockFilter = {
            itemMaterial: "All",
            itemType: "All",
			itemRawReady: "All",
            itemIsClamed: "All"
        };
		
	getMasterData.getType()
		.then(function(data) {
			$scope.types = data;
		});
		
	getMasterData.getMaterial()
		.then(function(data) {
			$scope.materials = data;
		});
		
	var customerMasterList = [];
	$scope.allCustomers = [];

	$scope.getFilteredCustomer = function(customerValue) {
		console.log("Master Customers", customerMasterList);
		$scope.allCustomers = _.filter(customerMasterList, function(cust) {
			return cust.alias.toLocaleLowerCase().includes(customerValue.toLocaleLowerCase());
		});
		console.log("Filtered Customers", $scope.allCustomers);
		return $scope.allCustomers;
	};

	var getAllCustomers = function() {
		var api = config.api.allCustomers;
		httpRequest.get(api)
			.then(function(response) {
				customerMasterList = response.data;
				$scope.allCustomers = response.data;
				$log.log(response);
			});
	}

	getAllCustomers();

	$scope.clearFilters = function() {
		$scope.stockFilter = {
            itemMaterial: "All",
            itemType: "All"
        };
		getFilteredStocks();
	};
	
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
	 
	 $scope.format = 'dd-MMM-yy'
    
	var getFilteredStocks = function(filterObj) {
            if (angular.isUndefined(filterObj))
                filterObj = {};
            var api = config.api.allStocks;
            httpRequest.postData(api, filterObj)
                .then(function(data) {
                    $scope.stocks = data.data;					
					console.log("Stocks", $scope.stocks);
                });
        };
        getFilteredStocks();
		
		$scope.applyFilters = function() {
		
            var filter = {};

            if (angular.isDefined($scope.stockFilter.customer))
                filter.customerId = $scope.stockFilter.customer.id;

            if (angular.isDefined($scope.stockFilter.itemDiameter))
                filter.itemDiameter = $scope.stockFilter.itemDiameter;

            if (angular.isDefined($scope.stockFilter.itemOpening))
                filter.itemOpening = $scope.stockFilter.itemOpening;
				
			if (angular.isDefined($scope.stockFilter.itemLength))
                filter.itemLength = $scope.stockFilter.itemLength;

            if (angular.isDefined($scope.stockFilter.itemWidth))
                filter.itemWidth = $scope.stockFilter.itemWidth;

            if (angular.isDefined($scope.stockFilter.itemMaterial) && !angular.equals($scope.stockFilter.itemMaterial, "All"))
                filter.itemMaterial = $scope.stockFilter.itemMaterial;

            if (angular.isDefined($scope.stockFilter.itemType) && !angular.equals($scope.stockFilter.itemType, "All"))
                filter.itemType = $scope.stockFilter.itemType;
				
			if (angular.isDefined($scope.stockFilter.itemRawReady) && !angular.equals($scope.stockFilter.itemRawReady, "All"))
                filter.itemRawReady = $scope.stockFilter.itemRawReady;

            if (angular.isDefined($scope.stockFilter.itemIsClamped) && !angular.equals($scope.stockFilter.itemIsClamped, "All"))
                filter.itemIsClamped = $scope.stockFilter.itemIsClamped;
				
			if (angular.isDefined($scope.stockFilter.itemClampThickness))
                filter.itemClampThickness = $scope.stockFilter.itemClampThickness;

            if (angular.isDefined($scope.stockFilter.stockFromDt))
                filter.stockDateFrom = $scope.stockFilter.stockFromDt;

            if (angular.isDefined($scope.stockFilter.stockToDt))
                filter.stockDateTo = $scope.stockFilter.stockToDt;
				
			console.log(filter);

            getFilteredStocks(filter);
        }
    
     $scope.editStock=function(stock){
        stockService.setSTockToEdit(stock);
        $state.go('modules.editStock',{stockToEdit:stock});
     };
    
  }]);
