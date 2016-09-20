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








  this.audio = new Howl({src:['./js/tones/1.wav']})

  this.audio2 = new Howl({src:['./js/tones/2.wav']})

  this.audio3 = new Howl({src:['./js/tones/3.wav']})

  this.audio4 = new Howl({src:['./js/tones/4.wav']})

  this.audio5 = new Howl({src:['./js/tones/5.wav']})

  this.audio6 = new Howl({src:['./js/tones/6.wav']})

  this.audio7 = new Howl({src:['./js/tones/7.wav']})

  this.audio8 = new Howl({src:['./js/tones/8.wav']})

  this.audio9 = new Howl({src:['./js/tones/9.wav']})

  this.audio10 = new Howl({src:['./js/tones/10.wav']})

  this.audio11 = new Howl({src:['./js/tones/11.wav']})

  this.audio12 = new Howl({src:['./js/tones/12.wav']})

  this.audio13 = new Howl({src:['./js/tones/13.wav']})

  this.audio14 = new Howl({src:['./js/tones/14.wav']})

  this.audio15 = new Howl({src:['./js/tones/15.wav']})

  this.audio16 = new Howl({src:['./js/tones/16.wav']})

  this.audio17 = new Howl({src:['./js/tones/17.wav']})

  this.audio18 = new Howl({src:['./js/tones/18.wav']})

  this.audio19 = new Howl({src:['./js/tones/19.wav']})

  this.audio20 = new Howl({src:['./js/tones/20.wav']})

  this.audio21 = new Howl({src:['./js/tones/21.wav']})

  this.audio22 = new Howl({src:['./js/tones/22.wav']})

  this.audio23 = new Howl({src:['./js/tones/23.wav']})

  this.audio24 = new Howl({src:['./js/tones/24.wav']})












})
