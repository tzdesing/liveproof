//window.onload = () => {
  //'use strict';

  if ('serviceWorker' in navigator) {
    //navigator.serviceWorker
    //         .register('./sw.js');
  }

  var counter_list = [10,10000,10000];
  var str_counter_0 = counter_list[0];
  var str_counter_1 = counter_list[1];
  var str_counter_2 = counter_list[2];
  var display_str = "";
  var display_div = document.getElementById("display_div_id");

  function incrementCount(current_count){
    setInterval(function(){
      // clear count
      while (display_div.hasChildNodes()) {
          display_div.removeChild(display_div.lastChild);
      }
      str_counter_0++;
      if (str_counter_0 > 99) {
        str_counter_0 = 0; // reset count
        str_counter_1++;    // increase next count
      }
      if(str_counter_1>99999){
        str_counter_2++;
      }
      //display_str = str_counter_2.toString() + str_counter_1.toString() + str_counter_0.toString();
      display_str = Math.floor(Date.now()/1000).toString(16) ;
      for (var i = 0; i < display_str.length; i++) {
        var new_span = document.createElement('span');
        new_span.className = 'num_tiles';
        new_span.innerText = display_str[i];
        display_div.appendChild(new_span);
      }
    },1000);
  }

//}
