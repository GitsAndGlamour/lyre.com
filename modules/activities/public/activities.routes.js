'use strict';

angular.module('lyre.activities')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
  }]);
