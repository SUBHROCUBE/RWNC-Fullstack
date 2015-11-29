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

	$scope.item.parentOrderId=parentOrderId;

        $scope.createItem = function() {
            //if(angular.isUndefined(parentOrderId)) return;
            $validator.validate($scope, 'item')
                .then(function(success) {
                        console.log($scope.item);
			var filter = commonAddEditOrderItemService.createFilters($scope.item);

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
					//console.log("Add Success :"+$scope.item.parentOrderId);
					//console.log("Data Parent Order Id :"+data.data.parentOrderId);

					var alert={};
					alert.type='success';
					alert.msg='Order added successfully !'
					orderService.setAlerts(alert);

					$state.go("modules.orderItem",{parentOrderId:data.data.parentOrderId});
                                }
                            });
                    },
                    function(error) {
                        //do nothing.
					var alert={};
					alert.type='danger';
					alert.msg='Failed to add order ! .'
					orderService.setAlerts(alert);
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
			var filter = commonAddEditOrderItemService.createFilters($scope.item);

                        console.log("Edit Controller"+JSON.stringify(filter));
                        var api = config.api.addEditOrder;
                        httpRequest.postData(api, filter)
                            .then(function(data) {
                                console.log(data);
                                if (data.status == 200) {
                                    orderService.setParentOrderId(data.parentOrderId);

					var alert={};
					alert.type='success';
					alert.msg='Order edited successfully !'
					orderService.setAlerts(alert);

					console.log("Edit Success :"+$scope.item.parentOrderId);
					$state.go("modules.orderItem",{parentOrderId:$scope.item.parentOrderId});
                                }
                            });
                    },
                    function(error) {
                        //do nothing.
					var alert={};
					alert.type='danger';
					alert.msg='Failed to update order..'
					orderService.setAlerts(alert);

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

	var createFilters = function(item) {
		                        var filter = {};

                        if (angular.isDefined(item.itemId))
                            filter.itemId = item.itemId;

                        if (angular.isDefined(item.orderId))
                            filter.orderId = item.orderId;

                        if (angular.isDefined(item.parentOrderId))
                            filter.parentOrderId = item.parentOrderId;

                        if (angular.isDefined(item.itemRawReady))
                            filter.itemRawReady = item.itemRawReady;

                        if (angular.isDefined(item.customer))
                            filter.customerId = item.customer.id;

                        if (angular.isDefined(item.itemDiameter))
                            filter.itemDiameter = item.itemDiameter

                        if (angular.isDefined(item.itemOpening))
                            filter.itemOpening = item.itemOpening;

                        if (angular.isDefined(item.itemMaterial) && !angular.equals(item.itemMaterial, "ALL"))
                            filter.itemMaterial = item.itemMaterial;

                        if (angular.isDefined(item.itemType) && !angular.equals(item.itemType, "ALL"))
                            filter.itemType = item.itemType;

                        if (angular.isDefined(item.itemLength))
                            filter.itemLength = item.itemLength;

                        if (angular.isDefined(item.itemWidth))
                            filter.itemWidth = item.itemWidth;

                        if (angular.isDefined(item.itemClamped))
                            filter.itemClamped = item.itemClamped;

                        if (angular.isDefined(item.itemClampPosition))
                            filter.itemClampPosition = item.itemClampPosition;

                        if (angular.isDefined(item.itemClampDescription))
                            filter.itemClampDescription = item.itemClampDescription;

                        if (angular.isDefined(item.itemClampLength))
                            filter.itemClampLength = item.itemClampLength;

                        if (angular.isDefined(item.itemClampThickness))
                            filter.itemClampThickness = item.itemClampThickness;

                        if (angular.isDefined(item.itemDescription))
                            filter.itemDescription = item.itemDescription;

                        if (angular.isDefined(item.orderRate))
                            filter.orderRate = item.orderRate;

                        if (angular.isDefined(item.orderQuantity))
                            filter.orderQuantity = item.orderQuantity;

                        if (angular.isDefined(item.orderWeight))
                            filter.orderWeight = item.orderWeight;

                        if (angular.isDefined(item.orderDeliveryDate))
                            filter.orderDeliveryDate = item.orderDeliveryDate;

			return filter;
	}

	return {
		createFilters:createFilters,
		getFilteredCustomer: getFilteredCustomer,
		getAllCustomers: getAllCustomers
	};
    }]);
