angular.module('ePiano')
.service('service' , function ($http , $q) {

  // the listen method stats hrer

  this.getpiano = function (pianest) {
      var dfd = $q.defer();

      $http({
        method: 'JSONP',
        url:'https://itunes.apple.com/search?term=' + pianest + '&callback=JSON_CALLBACK'

      }).then(function (result){


        var dataArr = [];
        for (var i = 0 ; i < result.data.results.length ; i++) {
          var theResult = result.data.results;
          var pianoData = {


              Artist: theResult[i].artistName
              ,Collection: theResult[i].collectionName

              ,Play: theResult[i].previewUrl

          }
          dataArr.push(pianoData)

        }
        dfd.resolve(dataArr);

      })


      return dfd.promise;
    }


//the listen method ends here



  // this.cKey = new Audio("a1.wav");
  this.audio = document.createElement('audio');
  this.audio.src = './js/tones/1.wav'
  

  this.audio2 = document.createElement('audio');
  this.audio2.src = './js/tones/2.wav'

  this.audio3 = document.createElement('audio');
  this.audio3.src = './js/tones/3.wav'

  this.audio4 = document.createElement('audio');
  this.audio4.src = './js/tones/4.wav'

  this.audio5 = document.createElement('audio');
  this.audio5.src = './js/tones/5.wav'

  this.audio6 = document.createElement('audio');
  this.audio6.src = './js/tones/6.wav'

  this.audio7 = document.createElement('audio');
  this.audio7.src = './js/tones/7.wav'

  this.audio8 = document.createElement('audio');
  this.audio8.src = './js/tones/8.wav'

  this.audio9 = document.createElement('audio');
  this.audio9.src = './js/tones/9.wav'

  this.audio10 = document.createElement('audio');
  this.audio10.src = './js/tones/10.wav'

  this.audio11 = document.createElement('audio');
  this.audio11.src = './js/tones/11.wav'

  this.audio12 = document.createElement('audio');
  this.audio12.src = './js/tones/12.wav'

  this.audio13 = document.createElement('audio');
  this.audio13.src = './js/tones/13.wav'

  this.audio14 = document.createElement('audio');
  this.audio14.src = './js/tones/14.wav'

  this.audio15 = document.createElement('audio');
  this.audio15.src = './js/tones/15.wav'

  this.audio16 = document.createElement('audio');
  this.audio16.src = './js/tones/16.wav'

  this.audio17 = document.createElement('audio');
  this.audio17.src = './js/tones/17.wav'

  this.audio18 = document.createElement('audio');
  this.audio18.src = './js/tones/18.wav'

  this.audio19 = document.createElement('audio');
  this.audio19.src = './js/tones/19.wav'

  this.audio20 = document.createElement('audio');
  this.audio20.src = './js/tones/20.wav'

  this.audio21 = document.createElement('audio');
  this.audio21.src = './js/tones/21.wav'

  this.audio22 = document.createElement('audio');
  this.audio22.src = './js/tones/22.wav'

  this.audio23 = document.createElement('audio');
  this.audio23.src = './js/tones/23.wav'

  this.audio24 = document.createElement('audio');
  this.audio24.src = './js/tones/24.wav'











})
