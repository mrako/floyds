angular.module('floyds.controllers', [])

.controller('CardsCtrl', function($scope, $rootScope, Cards) {

  $scope.currentCard = Cards.random();
  $scope.questions = [];
  $scope.finished = false;

  var newCard = function() {
    $scope.currentCard = Cards.random();
    if ($scope.currentCard == null) {
      $scope.finished = true;
    }
  }

  var addQuestion = function() {
    if ($scope.currentCard.questions.length == 0) {
      newCard();
    }

    // var index = Math.floor(Math.random() * $scope.currentCard.questions.length);
    $scope.questions.push($scope.currentCard.questions[0]);
    $scope.currentCard.questions.splice(0, 1);

    $scope.totalCards += 1;
  }

  $rootScope.correctCards = 0;
  $scope.totalCards = 0;

  $scope.hover = "";

  addQuestion();

  $scope.cardDestroyed = function(index) {
    $scope.questions.splice(index, 1);
  };

  $scope.cardSwiped = function(index) {
    addQuestion();
  };
})

.controller('CardCtrl', function($scope, $rootScope, $ionicSwipeCardDelegate) {
  var next = function() {
    var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);

    card.swipe();
  }

  $scope.correct = function() {
    $rootScope.correctCards += 1;
    next();
  };

  $scope.incorrect = function() {
    next();
  };
})

.controller('QuestionsCtrl', function($scope, $stateParams, Cards) {
  $scope.card = Cards.get($stateParams.questionId);
});
