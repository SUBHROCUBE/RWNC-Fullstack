'use strict';

angular.module('rwncApp')
  .service('received', function () {
    var receivedToEdit=null;
    return {
        setReceivedToEdit:function(received){
            receivedToEdit=received;
        },
        
        getReceivedToEdit:function(){
            return receivedToEdit;
        }
    };
  });
