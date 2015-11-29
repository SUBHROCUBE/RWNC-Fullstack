'use strict';

angular.module('rwncApp')
  .service('orderService', [function () {
  	var orderParentId;
	var alerts=[];
  	return{
  		setParentOrderId:function(id){
  			orderParentId=id;
  		},
  		getParentOrderId:function(){
  			return orderParentId;
  		},
  		clearParentOrderId:function(){
  			orderParentId=null;
  		},
		getAlerts:function(){
			return alerts;
		},
		setAlerts:function(alert){
			alerts.push(alert);
		}
  	};
    // AngularJS will instantiate a singleton by calling "new" on this function
  }]);
