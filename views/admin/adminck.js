$( document ).ready(function() {
 
function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}




// function checkCookie() {
//     // Get cookie using our custom function
//     var firstName = getCookie("ckadminpass");
    
//     if(firstName !== null ) {
//         console.log( "ready!" );
       
//     } else  {
//        window.location.replace('index.html')
//        console.log( "not ready!" );
  
//     }
//  }


//  checkCookie()


});




function delete_cookie() {
    let expires = null
    const d = new Date();
    d.setTime(d.getTime() - 2 * 24 * 60 * 60 * 1000);
    expires = "expires=" + d.toUTCString();
    document.cookie = 'ckadminpass' + "=" + 'stripehype' + ";" + expires + ";path=/";
    window.location.reload()
   

      
  }