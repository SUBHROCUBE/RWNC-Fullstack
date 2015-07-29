'use strict';

angular.module('rwncApp')
  .controller('ModulesEditReceivedCtrl', function ($scope,$validator,httpRequest,received,$log) {
    $scope.$parent.module="received";
    $scope.alerts=[];

    $scope.received=received.getReceivedToEdit();
    $log.log($scope.received)
    
    $scope.closeAlert = function(index) {
    	$scope.alerts.splice(index, 1);
  	};
    
    
  });
