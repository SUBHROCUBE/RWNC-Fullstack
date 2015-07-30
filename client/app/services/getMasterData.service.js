'use strict';

angular.module('rwncApp')
  .service('getMasterData', function (httpRequest, $q) {
    return {
        getType:function(){
            var deferred = $q.defer();
            var api=config.api.getTypes;
            httpRequest.get(api).then(function(response){
                deferred.resolve(response)
            })
            
            return deferred.promise;
        },
        
        getMaterial:function(){
            var deferred = $q.defer();
            var api=config.api.getMaterial;
            httpRequest.get(api).then(function(response){
                deferred.resolve(response)
            })
            
            return deferred.promise;
        }
    }
  });
