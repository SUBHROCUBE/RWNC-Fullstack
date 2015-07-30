'use strict';

angular.module('rwncApp')
  .service('httpRequest', ['$http', function($http){
	return {
		get:function(uri,param){
			var url=config.apiBaseURL+uri;
			return $http.get(url)
			.then(function(response){
				return response;
			});
		},
		postData:function(uri,data){
			var url=config.apiBaseURL+uri;
			return $http.post(url,data)
			.then(function(response){
				return response;
			});
		},
		putData:function(uri,data){
			var url=config.apiBaseURL+uri;
			return $http.put(url,data)
			.then(function(response){
				return response;
			});
		},
	};
}]);
