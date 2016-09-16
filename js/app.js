angular.module('ePiano' ,["ui.router"])
.config(function($stateProvider , $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home' , {
    url: '/'
    ,templateUrl: './js/templates/homeTemp.html'
  })

  .state('play' , {
    url: '/play'
    ,templateUrl: './js/templates/playTemp.html'
  })
})
