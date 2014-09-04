angular.module('floyds.controllers', [])

.controller('CardsCtrl', function($scope, Cards) {
  var questionTypes = Cards.random().questions;

  var addQuestion = function() {
    var index = Math.floor(Math.random() * questionTypes.length);
    $scope.questions.push(questionTypes[index]);
    questionTypes.splice(index, 1);
  }

  $scope.questions = [];
  addQuestion();

  $scope.hover = "";

  $scope.cardDestroyed = function(index) {
    $scope.questions.splice(index, 1);
  };

  $scope.cardSwiped = function(index) {
    addQuestion();
  };
})

.controller('QuestionsCtrl', function($scope, $stateParams, Cards) {
  $scope.card = Cards.get($stateParams.questionId);
});
