angular.module('floyds', ['ionic', 'ionic.contrib.ui.cards', 'floyds.utils', 'floyds.controllers', 'floyds.services'])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .run(function($localstorage) {
    $localstorage.setObject('cards', seedCards());
    /*
    if ($localstorage.get('cards') == null) {
      $localstorage.setObject('cards', seedCards());
    }
    */
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'templates/card.html',
        controller: 'CardsCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
  .directive('noScroll', function($document) {

    return {
      restrict: 'A',
      link: function($scope, $element, $attr) {

        $document.on('touchmove', function(e) {
          e.preventDefault();
        });
      }
    }
  });
