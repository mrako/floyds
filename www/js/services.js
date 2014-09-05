angular.module('floyds.services', [])
  .factory('Cards', function($localstorage) {
    return {
      all: function() {
        return $localstorage.getObject('cards');
      },
      random: function() {
        console.log($localstorage.getObject('cards'));

        var cards = $localstorage.getObject('cards');
        var card_id = Math.floor(Math.random() * cards.length);
        return cards[card_id];
      },
      get: function(id) {
        return $localstorage.getObject('cards')[id];
      }
    }
  });
