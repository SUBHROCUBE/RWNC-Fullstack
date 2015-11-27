'use strict';

angular.module('rwncApp')
  .service('editCustomerHelper', ['$http', function($http){
	var customerToEdit=null;
	var alerts=[];
	return {
		getCustomerToEdit:function(){
			return customerToEdit;
		},
		setCustomerToEdit:function(customer){
			customerToEdit=customer
		},
		getAlerts:function(){
			return alerts;
		},
		setAlerts:function(alert){
			alerts.push(alert);
		}
	};
}]);
 