'use strict';

angular.module('rwncApp')
  .service('getMasterData', function (httpRequest, $q) {
    var type=null;
    var material=null;
    return {
        getType:function(){
            var deferred = $q.defer();
            var api=config.api.getTypes;
            if(type==null){
                httpRequest.get(api).then(function(response){
                    type=response.data;
                    deferred.resolve(type);
                })    
            }
            else
                deferred.resolve(type);
                        
            return deferred.promise;
        },
        
        getMaterial:function(){
            var deferred = $q.defer();
            if(material==null){
                var api=config.api.getMaterial;
                httpRequest.get(api).then(function(response){
                    material=response.data;
                    deferred.resolve(material);
                })    
            }
            else
                deferred.resolve(material);                        
            return deferred.promise;
        }
    }
  });
