'use strict';

angular.module('rwncApp')
    .controller('ModulesAddItemCtrl', ['$scope', '$log', '$state', '$stateParams', '$validator', 'httpRequest', 'getMasterData', 'orderService', 'commonAddEditOrderItemService', function($scope, $log, $state, $stateParams, $validator, httpRequest, getMasterData, orderService, commonAddEditOrderItemService) {
        $scope.$parent.module = "orders";

        $scope.item = {
		itemIsClamped:"0",
		itemRawReady : "ready"
	};
	
	$scope.getFilteredCustomer = function(customerValue) {
     		return commonAddEditOrderItemService.getFilteredCustomer(customerValue);
   	};


        getMasterData.getType()
            .then(function(data) {
                console.log(data);
                $scope.types = data;
            });
        getMasterData.getMaterial()
            .then(function(data) {
                $scope.materials = data;
            });

        $scope.today = function() {
            $scope.item.deliveryDt = new Date();
        };

        $scope.status = {
            deliveryDtOpened: false
        };
        $scope.format = 'dd-MMM-yy';

        $scope.deliveryDtOpened = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.deliveryDtOpened = true;
        };


        var parentOrderId = $stateParams.parentOrderId;
        console.log(parentOrderId);

        $scope.createItem = function() {
            //if(angular.isUndefined(parentOrderId)) return;
            $validator.validate($scope, 'item')
                .then(function(success) {
                        console.log($scope.item);
			var filter = getFilteredCustomer.createFilters();

                        if (parentOrderId) {
                            $scope.item.parentOrderId = parentOrderId;
                        }
                        console.log(JSON.stringify(filter));
                        var api = config.api.addEditOrder;
                        httpRequest.postData(api, filter)
                            .then(function(data) {
                                console.log(data);
                                if (data.status == 200) {
                                    orderService.setParentOrderId(data.parentOrderId);
                                }
                            });
                    },
                    function(error) {
                        //do nothing.
                    });
        }
    }])
    .controller('ModulesEditItemCtrl', ['$scope', '$log', '$state', '$stateParams', '$validator', 'httpRequest', 'getMasterData', 'orderService', 'commonAddEditOrderItemService', function($scope, $log, $state, $stateParams, $validator, httpRequest, getMasterData, orderService, commonAddEditOrderItemService) {
        
	$scope.item = $stateParams.itemToEdit;
	$scope.item.itemIsClamped = ""+$scope.item.itemIsClamped;
	console.log($scope.item);

	var allCustomers;
        var getAllCustomers = function() {
            var api = config.api.allCustomers;
            httpRequest.get(api)
                .then(function(response) {
		    console.log(response);
                    allCustomers= response.data;
		    
			var tempCustArray = _.filter(allCustomers, function(cust) {
					console.log("within " + JSON.stringify($scope.item));
					//return cust.alias.toLocaleLowerCase().includes(customerValue.toLocaleLowerCase());
					return cust.id==$scope.item.customerId;
				    });
				console.log(tempCustArray);
			$scope.item.customer=tempCustArray[0];
                });
        };
getAllCustomers();
	
 	
	
	$scope.getFilteredCustomer = function(customerValue) {
     		return commonAddEditOrderItemService.getFilteredCustomer(customerValue);
   	};

        getMasterData.getType()
            .then(function(data) {
                console.log(data);
                $scope.types = data;
            });
        getMasterData.getMaterial()
            .then(function(data) {
                $scope.materials = data;
            });

        $scope.today = function() {
            $scope.item.deliveryDt = new Date();
        };

        $scope.status = {
            deliveryDtOpened: false
        };
        $scope.format = 'dd-MMM-yy';

        $scope.deliveryDtOpened = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.deliveryDtOpened = true;
        };
        $scope.createItem = function() {
            //if(angular.isUndefined(parentOrderId)) return;
            $validator.validate($scope, 'item')
                .then(function(success) {
                        console.log($scope.item);
			var filter = getFilteredCustomer.createFilters();

                        if (parentOrderId) {
                            $scope.item.parentOrderId = parentOrderId;
                        }
                        console.log(JSON.stringify(filter));
                        var api = config.api.addEditOrder;
                        httpRequest.postData(api, filter)
                            .then(function(data) {
                                console.log(data);
                                if (data.status == 200) {
                                    orderService.setParentOrderId(data.parentOrderId);
                                }
                            });
                    },
                    function(error) {
                        //do nothing.
                    });
        }
    }])
    .factory ('commonAddEditOrderItemService', ['httpRequest', function(httpRequest) {


        var getFilteredCustomer = function(customerValue) {
            var filteredCustomers = _.filter(allCustomers, function(cust) {
                return cust.alias.toLocaleLowerCase().includes(customerValue.toLocaleLowerCase());
            });
            console.log("Filtered Customers", filteredCustomers);
            return filteredCustomers;
        };

	var allCustomers;
        var getAllCustomers = function() {
            var api = config.api.allCustomers;
            httpRequest.get(api)
                .then(function(response) {
		    console.log(response);
                    allCustomers= response.data;
		    return allCustomers;
                });
        };

        getAllCustomers();

	var createFilters = function() {
		                        var filter = {};

                        if (angular.isDefined($scope.item.itemRawReady))
                            filter.itemRawReady = $scope.item.itemRawReady;

                        if (angular.isDefined($scope.item.customer))
                            filter.customerId = $scope.item.customer.id;

                        if (angular.isDefined($scope.item.itemDiameter))
                            filter.itemDiameter = $scope.item.itemDiameter

                        if (angular.isDefined($scope.item.itemOpening))
                            filter.itemOpening = $scope.item.itemOpening;

                        if (angular.isDefined($scope.item.itemMaterial) && !angular.equals($scope.item.itemMaterial, "ALL"))
                            filter.itemMaterial = $scope.item.itemMaterial;

                        if (angular.isDefined($scope.item.itemType) && !angular.equals($scope.item.itemType, "ALL"))
                            filter.itemType = $scope.item.itemType;

                        if (angular.isDefined($scope.item.itemLength))
                            filter.itemLength = $scope.item.itemLength;

                        if (angular.isDefined($scope.item.itemWidth))
                            filter.itemWidth = $scope.item.itemWidth;

                        if (angular.isDefined($scope.item.itemClamped))
                            filter.itemClamped = $scope.item.itemClamped;

                        if (angular.isDefined($scope.item.itemClampPosition))
                            filter.itemClampPosition = $scope.item.itemClampPosition;

                        if (angular.isDefined($scope.item.itemClampDescription))
                            filter.itemClampDescription = $scope.item.itemClampDescription;

                        if (angular.isDefined($scope.item.itemClampLength))
                            filter.itemClampLength = $scope.item.itemClampLength;

                        if (angular.isDefined($scope.item.itemClampThickness))
                            filter.itemClampThickness = $scope.item.itemClampThickness;

                        if (angular.isDefined($scope.item.itemDescription))
                            filter.itemDescription = $scope.item.itemDescription;

                        if (angular.isDefined($scope.item.orderRate))
                            filter.orderRate = $scope.item.orderRate;

                        if (angular.isDefined($scope.item.orderQuantity))
                            filter.orderQuantity = $scope.item.orderQuantity;

                        if (angular.isDefined($scope.item.orderWeight))
                            filter.orderWeight = $scope.item.orderWeight;

                        if (angular.isDefined($scope.item.deliveryDate))
                            filter.deliveryDate = $scope.item.deliveryDate;

			return filter;
	}

	return {
		createFilters:createFilters,
		getFilteredCustomer: getFilteredCustomer,
		getAllCustomers: getAllCustomers
	};
    }]);
