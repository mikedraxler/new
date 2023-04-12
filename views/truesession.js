


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



     }, randomval)







    });