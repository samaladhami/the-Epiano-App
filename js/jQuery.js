$( document ).ready(function (){





  $(document).keypress(function(event){

  	var keycode = (event.keyCode ? event.keyCode : event.which);
  	if(keycode == '113'){
      $('#1').click();
      $('#1').css('background-color','#fd9595')
      $(this).keyup(function() {
        $('#1').css('background-color','#f5f5f5')
        // pause();

      })


  	}

  });


})
