angular.module('floyds.services', [])
  .factory('Cards', function($localstorage) {
    var cards = seedCards();
    //$localstorage.getObject('cards');
    var currentCard = null;

    return {
      all: function() {
        return $localstorage.getObject('cards');
      },
      random: function() {
        if (currentCard != null) {
          cards.splice(currentCard, 1);
        }

        currentCard = Math.floor(Math.random() * cards.length);
        return cards[currentCard];
      },
      get: function(id) {
        return $localstorage.getObject('cards')[id];
      }
    }
  });
