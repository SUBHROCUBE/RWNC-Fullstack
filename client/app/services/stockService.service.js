'use strict';

angular.module('rwncApp')
  .service('stockService', function () {
    var stockToEdit=null;
	var alerts=[];
    return {
        setSTockToEdit:function(stock){
            stockToEdit=stock;
        },      
        getStockToEdit:function(){
            return stockToEdit;
        },
		getAlerts:function(){
			return alerts;
		},
		setAlerts:function(alert){
			alerts.push(alert);
		}
    };
  });
