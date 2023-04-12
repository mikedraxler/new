




function transform(){
    let ele = document.getElementById("phno");
    ele.value = ele.value.replace(/^(\d{3})$/g, '$1-')
         .replace(/^(\d{3}\-\d{3})$/g, '$1-');
   }