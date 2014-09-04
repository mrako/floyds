angular.module('floyds.services', [])
  .factory('Cards', function() {
    var cards = [{
      "id": 1,
      "questions": [{
        "title": "What kind of soup is the Spanish tonillo?",
        "answer": "Egg soup",
        "category": "ss"
      }, {
        "title": "What is the main ingredient of a matelotê?",
        "answer": "Fish",
        "category": "mc"
      }, {
        "title": "What is mixed with vegetables in a Indian raita?",
        "answer": "Yoghurt",
        "category": "v"
      }, {
        "title": "What is layered with the apple in apple betty",
        "answer": "Breadcrumbs",
        "category": "sd"
      }, {
        "title": "What kind of drink is Santos?",
        "answer": "Coffee",
        "category": "d"
      }, {
        "title": "Which foods do Hindus avoid?",
        "answer": "Meat",
        "category": "t"
      }]
    }, {
      "id": 2,
      "questions": [{
        "title": "Soup can be thickened with a roux - from what is it made?",
        "answer": "Butter and flour",
        "category": "ss"
      }, {
        "title": "In which country could you cook on a barbie?",
        "answer": "Australia",
        "category": "mc"
      }, {
        "title": "What is chou rouge?",
        "answer": "Red cabbage",
        "category": "v"
      }, {
        "title": "What name do we give to milk in which natural bacteria have fermented the lactose?",
        "answer": "Yoghurt",
        "category": "sd"
      }, {
        "title": "What is Malmsey?",
        "answer": "A wine, or a wine grape",
        "category": "d"
      }, {
        "title": "For what is London's Spitalfields Market famous?",
        "answer": "Fruit and veg",
        "category": "t"
      }]
    }];

    return {
      all: function() {
        return cards;
      },
      random: function() {
        var card_id = Math.floor(Math.random() * cards.length);
        return cards[card_id];
      },
      get: function(id) {
        return cards[id];
      }
    }
  });
