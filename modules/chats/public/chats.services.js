'use strict';

angular.module('lyre.chats')
  .factory('appChats', ['$resource',
    function($resource) {
      return {
        single: $resource('chats/:chatId/:action', {
            chatId: '@_id'
          }, {
            message: {
              method: 'POST',
              params: {action: 'message'}
            },
            end: {
              method: 'POST',
              params: {action: 'end'}
            }
          })
      }
    }
  ])
  ;
