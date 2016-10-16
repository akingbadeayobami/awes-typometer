(function($){
  "use strict";

  $(document).ready(function(){

    // We like to get the text first
    var text = $('#textarea p').text();

    // remove all the white space
    text = text.trim();

    var cursorPositon = 0;
    // Initialize Valid Key Cded
    var keyCodes = [];
    var alphaNumeric = ['a','b','c','d','e','f','g','h','i','j','k' ,' ',',','.'];


    var i;

    // a - z
    for(i = 65; i<= 90; i++){

      keyCodes.push(i);

    }
    // 0 - 9
    for(i = 48; i<= 57; i++){

      keyCodes.push(i);

    }

    keyCodes.push(32); // space

    keyCodes.push(188); // comma

    keyCodes.push(190); // full stop




      $(document).keydown(function(e){

      var currentFieldPos =  24 * cursorPositon;

      var fieldText = $('#textarea p').html();

      fieldText = fieldText.trim();

      var processedText = fieldText.substr(0,currentFieldPos);

      var unprocessedText = fieldText.substr(currentFieldPos + 1);

      var cursorText = fieldText.charAt(currentFieldPos);

      var newText = '<span class="g">' + cursorText + '</span>';

      $('#textarea p').html(processedText + newText + unprocessedText);

      // 	console.log( e.keyCode);
      console.log(text.charAt(cursorPositon++));
      // if current posion  == end aler tand then sow the finall scr
    });

    // We want to get the blinker rate

  //  setTimeout(function(){



  //   },1000);

  });


}(jQuery));
