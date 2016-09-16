angular.module('ePiano')
.controller('ePianoCtrl', function ($scope ,service) {

  $scope.play = function(){
    service.audio.play();
    
  }

})
