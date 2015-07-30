'use strict';

angular.module('rwncApp')
  .service('orderService', [function () {
  	var orderParentId;
  	return{
  		setParentOrderId:function(id){
  			orderParentId=id;
  		},
  		getParentOrderId:function(){
  			return orderParentId;
  		},
  		clearParentOrderId:function(){
  			orderParentId=null;
  		}
  	};
    // AngularJS will instantiate a singleton by calling "new" on this function
  }]);
