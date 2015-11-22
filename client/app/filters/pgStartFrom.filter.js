'use strict';

angular.module('rwncApp')
  .filter('pgStartFrom', function () {
    return function (input, start) {
      start = +start; //parse to int
      if (input) {
        return input.slice(start);
      } 
      else
       	return input;
    };
 });
