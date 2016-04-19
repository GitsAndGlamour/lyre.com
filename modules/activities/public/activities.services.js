'use strict';

angular.module('lyre.activities')
  .factory('appActivities', ['$resource',
    function($resource) {
      return $resource('activities/feed/:userId', {
            userId: '@_id'
        });
    }
  ])
  ;
