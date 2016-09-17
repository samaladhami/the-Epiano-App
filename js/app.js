angular.module('ePiano' ,["ui.router" , 'ngGrid' ])
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
    , controller: 'ePianoCtrl'
  })
  .state('tutorial' , {
    url: '/tutorial'
    ,templateUrl: './js/templates/tutorialTemp.html'


  })

  .state('listen' , {
    url: '/listen'
    ,templateUrl: './js/templates/listenTemp.html'
    // , controller:


  })

  .state('about' , {
    url: '/about'
    ,templateUrl: './js/templates/aboutTemp.html'

    })
})
