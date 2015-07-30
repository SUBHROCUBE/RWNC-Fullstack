'use strict';

describe('Filter: pgStartFrom', function () {

  // load the filter's module
  beforeEach(module('rwncApp'));

  // initialize a new instance of the filter before each test
  var pgStartFrom;
  beforeEach(inject(function ($filter) {
    pgStartFrom = $filter('pgStartFrom');
  }));

  it('should return the input prefixed with "pgStartFrom filter:"', function () {
    var text = 'angularjs';
    expect(pgStartFrom(text)).toBe('pgStartFrom filter: ' + text);
  });

});
