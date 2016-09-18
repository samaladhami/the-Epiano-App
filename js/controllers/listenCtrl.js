angular.module('ePiano')
.controller('listenCtrl' , function ( $scope, service ){


  $scope.gridOptions = {
    data: 'pianoData',
    height: '110px',
    sortInfo: {fields: ['Song', 'Artist'], directions: ['asc']},
    columnDefs: [
      {field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img class="the-play-icon" src="http://www.eyesinair.com/images/logo_play_png.png"></a></div>'},
      {field: 'Artist', displayName: 'Artist'},
      {field: 'Collection', displayName: 'Collection'},

    ]
};




  $scope.getPianoData = function (pianest) {
    service.getpiano(pianest)
    .then(function (result) {
      console.log(result);
      $scope.pianoData = result;

    })
  }
  $scope.getPianoData('George Gershwin piano');

})
