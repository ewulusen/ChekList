angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('start', {
    url: '/page1',
    templateUrl: 'templates/start.html',
    controller: 'startCtrl'
  })

  .state('JLista', {
    url: '/page2',
    templateUrl: 'templates/JLista.html',
    controller: 'JListaCtrl'
  })

  .state('lista', {
    url: '/page3',
    templateUrl: 'templates/lista.html',
    controller: 'listaCtrl'
  })

  .state('elist', {
    url: '/page4',
    templateUrl: 'templates/elist.html',
    controller: 'elistCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});