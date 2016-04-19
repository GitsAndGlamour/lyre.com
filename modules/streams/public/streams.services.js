'use strict';

angular.module('lyre.streams')
  .factory('appStreams', ['$resource',
    function($resource) {
      return {
        single: $resource('streams/:streamId/:action', {
            streamId: '@_id'
          }, {
            subscribe: {
              method: 'POST',
              params: {action: 'subscribe'}
            },
            unsubscribe: {
              method: 'POST',
              params: {action: 'unsubscribe'}
            }
          })
      }
    }
  ])
  ;
