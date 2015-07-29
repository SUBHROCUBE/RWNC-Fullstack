'use strict';

angular.module('rwncApp')
  .service('stockService', function () {
    var stockToEdit=null;
    return {
        setSTockToEdit:function(stock){
            stockToEdit=stock;
        },
        
        getStockToEdit:function(){
            return stockToEdit;
        }
    };
  });
