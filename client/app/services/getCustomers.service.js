'use strict';

angular.module('rwncApp')
  .service('getCustomers', function ($q,httpRequest) {
    var customers=[];
    return { 
        getAllCustomers:function(){
        var deferred = $q.defer();
        var api=config.api.allCustomers;
        if(customers.length==0){
        httpRequest.get(api)
        .then(function(response){
          customers=response.data;
            deferred.resolve(customers)
        });
        }
            else{
                 deferred.resolve(customers)
            }
        return deferred.promise;
    }
           }
  });
