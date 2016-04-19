'use strict';

angular.module('lyre.chats')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      ;
    $locationProvider.html5Mode(true);
  }]);
