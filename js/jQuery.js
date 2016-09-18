$( document ).ready(function (){





  $(document).keypress(function(event){

  	var keycode = (event.keyCode ? event.keyCode : event.which);

// the keypress
    if(keycode == '81' || keycode == '113'){
      $('#C').click();
      $('#C').css('background-color','#fd9595')
      $(this).keyup(function() {


        $('#C').css('background-color','#f5f5f5')

      })
  	}


    else if(keycode == '50'){
      $('#CS').click();
      $('#CS').css('background-color','#4e5077')

      $(this).keyup(function() {
        $('#CS').css('background-color','#000')
      })
    }

    else if(keycode == '87' || keycode == '119'){
      $('#D').click();
      $('#D').css('background-color','#fd9595')
      $(this).keyup(function() {
        $('#D').css('background-color','#f5f5f5')
      })
    }

    else if(keycode == '51'){
      $('#DS').click();
      $('#DS').css('background-color','#4e5077')
      $(this).keyup(function() {
        $('#DS').css('background-color','#000')
      })
    }

    else if(keycode == '69' || keycode == '101'){
      $('#E').click();
      $('#E').css('background-color','#fd9595')
      $(this).keyup(function() {
        $('#E').css('background-color','#f5f5f5')
      })
    }

    else if(keycode == '82' || keycode == '114'){
      $('#F').click();
      $('#F').css('background-color','#fd9595')
      $(this).keyup(function() {
        $('#F').css('background-color','#f5f5f5')
      })
    }

    else if(keycode == '53'){
      $('#FS').click();
      $('#FS').css('background-color','#4e5077')
      $(this).keyup(function() {
        $('#FS').css('background-color','#000')
      })
    }

    else if(keycode == '84' || keycode == '116'){
      $('#G').click();
      $('#G').css('background-color','#fd9595')
      $(this).keyup(function() {
        $('#G').css('background-color','#f5f5f5')
      })
    }

    else if(keycode == '54'){
      $('#GS').click();
      $('#GS').css('background-color','#4e5077')
      $(this).keyup(function() {
        $('#GS').css('background-color','#000')
      })
    }

    else if(keycode == '89' || keycode == '121'){
      $('#A').click();
      $('#A').css('background-color','#fd9595')
      $(this).keyup(function() {
        $('#A').css('background-color','#f5f5f5')
      })
    }

    else if(keycode == '55'){
      $('#AS').click();
      $('#AS').css('background-color','#4e5077')
      $(this).keyup(function() {
        $('#AS').css('background-color','#000')
      })
    }

    else if(keycode == '85' || keycode == '117'){
      $('#B').click();
      $('#B').css('background-color','#fd9595')
      $(this).keyup(function() {
        $('#B').css('background-color','#f5f5f5')
      })
    }

    else if(keycode == '86' || keycode == '118'){
      $('#C2').click();
      $('#C2').css('background-color','#fd9595')
      $(this).keyup(function() {
        $('#C2').css('background-color','#f5f5f5')
      })
    }

    else if(keycode == '71' || keycode == '103'){
      $('#CS2').click();
      $('#CS2').css('background-color','#4e5077')
      $(this).keyup(function() {
        $('#CS2').css('background-color','#000')
      })
    }

    else if(keycode == '66' || keycode == '98'){
      $('#D2').click();
      $('#D2').css('background-color','#fd9595')
      $(this).keyup(function() {
        $('#D2').css('background-color','#f5f5f5')
      })
    }

    else if(keycode == '72' || keycode == '104'){
      $('#DS2').click();
      $('#DS2').css('background-color','#4e5077')
      $(this).keyup(function() {
        $('#DS2').css('background-color','#000')
      })
    }

    else if(keycode == '78' || keycode == '110'){
      $('#E2').click();
      $('#E2').css('background-color','#fd9595')
      $(this).keyup(function() {
        $('#E2').css('background-color','#f5f5f5')
      })
    }

    else if(keycode == '77' || keycode == '109'){
      $('#F2').click();
      $('#F2').css('background-color','#fd9595')
      $(this).keyup(function() {
        $('#F2').css('background-color','#f5f5f5')
      })
    }

    else if(keycode == '75' || keycode == '107'){
      $('#FS2').click();
      $('#FS2').css('background-color','#4e5077')
      $(this).keyup(function() {
        $('#FS2').css('background-color','#000')
      })
    }

    else if(keycode == '44'){
      $('#G2').click();
      $('#G2').css('background-color','#fd9595')
      $(this).keyup(function() {
        $('#G2').css('background-color','#f5f5f5')
      })
    }

    else if(keycode == '76' || keycode == '108'){
      $('#GS2').click();
      $('#GS2').css('background-color','#4e5077')
      $(this).keyup(function() {
        $('#GS2').css('background-color','#000')
      })
    }

    else if(keycode == '46'){
      $('#A2').click();
      $('#A2').css('background-color','#fd9595')
      $(this).keyup(function() {
        $('#A2').css('background-color','#f5f5f5')
      })
    }

    else if(keycode == '59'){
      $('#AS2').click();
      $('#AS2').css('background-color','#4e5077')
      $(this).keyup(function() {
        $('#AS2').css('background-color','#000')
      })
    }

    else if(keycode == '47'){
      $('#B2').click();
      $('#B2').css('background-color','#fd9595')
      $(this).keyup(function() {
        $('#B2').css('background-color','#f5f5f5')
      })
    }






      console.log(keycode);

  });


})
