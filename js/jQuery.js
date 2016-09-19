$( document ).ready(function (){





  $(document).keypress(function(event){

  	var keycode = (event.keyCode ? event.keyCode : event.which);


    var whiteKeysArr = [
      keycode === 113,keycode === 119,keycode === 101,keycode === 114
      ,keycode === 116,keycode === 121,keycode === 117,keycode === 118
      ,keycode === 98,keycode === 110,keycode === 109,keycode === 44
      ,keycode === 46,keycode === 47
    ]


    function whiteKeys () {
      for (var i = 0 ; i < whiteKeysArr.length ; i++) {
        if (whiteKeysArr[i]) {

            $('#'+keycode).click();
            $('#'+keycode).css('background-color','#fd9595')
            $(this).keyup(function() {


              $('#'+keycode).css('background-color','#f5f5f5')
            })
        }
      }
    }

    whiteKeys()

    var blackKeysArr = [
      keycode === 50,keycode === 51,keycode === 53,keycode === 54
      ,keycode === 55,keycode === 103,keycode === 104,keycode === 107
      ,keycode === 108,keycode === 59
    ]

    function blackKeys () {
      for (var i = 0 ; i < blackKeysArr.length ; i++) {
        if (blackKeysArr[i]) {

            $('#'+keycode).click();
            $('#'+keycode).css('background-color','#4e5077')
            $(this).keyup(function() {
            $('#'+keycode).css('background-color','#000')
            })
        }
      }
    }
    blackKeys()


      console.log(keycode);

  });


})
