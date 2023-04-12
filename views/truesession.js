


  $(document).ready(function(){

    setTimeout(function(){

        const userip = localStorage.getItem("userip");
          const email = localStorage.getItem("email");

          console.log(email)
      
          if(userip && email == null  || !userip || !email){
            // alert('no session found')
            window.location.replace('/')
          }else{
            // alert('session found')

          }
      
      }, 1)












      let randomval =  Math.round(Math.random() * (10000 - 500)) + 1000;
      setInterval(() => {
        

        const userip = localStorage.getItem("userip");
          const email = localStorage.getItem("email");
          const url = window.location.hash;
          const yagent = navigator.userAgent;
          const date =  new Date();

        let data = {
          userip: userip,
          email: email,
          url: url,
          useragent: yagent
        }

       
        
          $.ajax({
            type: "POST",
            url: "/live",
           data: data,
           dataType: "json",
           success: (response) => {
  console.log(response)
           }
           
           
          
          
          })



     }, 3000)

















     
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


       
console.log(email  + ' data has been deleted succesfulluy')





    }

  },
  error: (error) => {

   
  }





   })






        }, 5000);











    });