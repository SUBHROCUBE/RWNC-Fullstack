'use strict';

angular.module('rwncApp')
  .filter('pgStartFrom', function () {
    return function (input,start) {
       start = +start; //parse to int
       return input.slice(start);
    };
  });
