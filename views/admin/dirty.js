        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
        // import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, update, remove, get} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
    apiKey: "AIzaSyDryl1gZJZboYOlnJWOF03-1m9zW5OyWL8",
    authDomain: "viewreal-d4881.firebaseapp.com",
    projectId: "viewreal-d4881",
    storageBucket: "viewreal-d4881.appspot.com",
    messagingSenderId: "964085508091",
    appId: "1:964085508091:web:60d2e5df7ad045e67a0d5e",
      // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://viewreal-d4881-default-rtdb.firebaseio.com/"
  };
   
        const app = initializeApp(firebaseConfig);

        const db = getDatabase();
     


$(document).ready(function(){
 
    // $.get("https://api.ipify.org?format=json.ip", function(json, status){
    //  document.getElementById('jin').value =  json
    // });
  


setInterval(()=>{
    // let viewers_ip = document.getElementById('jin').value
        // console.log("ip " + viewers_ip)



    


   

                  const dbref = ref(db)
                  
                  get(child(dbref, 'pageviews/' + "vs"  )).then((snapshot)=>{
                    if(snapshot){

                        let snapval = JSON.stringify(snapshot.val())
                        let snapval2 = snapshot.val()
                        console.log(snapshot.size + snapval)

                            let cleaner = snapval.replace(/{"/g, '<hr/>')
                            let cleanerx = cleaner.replace(/":"/g, ' : ')
                            let cleanery = cleanerx.replace( /x/g, '.')
                            let cleanerz = cleanery.replace(/"}/g, '')
                             let cleanerzy = cleanerz.replace(/":/, '<br/>')
                             let cleanerzyx = cleanerzy.replace(/","/g, '<br/><br/>')
                             let cleanerzyxx = cleanerzyx.replace(/}/g, '<br/><br/>')

                        document.getElementById('view_counter_text').innerHTML =  snapshot.size 
                        document.getElementById('view_counter_textx').innerHTML =   cleanerzyxx

                        tabledata(snapval2)
                    } 
                  })



function tabledata(snapval2){
    console.log(JSON.stringify(snapval2))


                    //   const data = cleanerzyxx
// console.log( cleanerzyxx)
//                   $(snapval2).each(function(index,value){
//                         const records =  '<tr scope="row" name="rowclamp"  class="rowclamp" onclick="return clamp()" >"<td >'+'<a class="idholder" target="iframe" style="color:green;" onclick="return verify()" href="https://average-ruby-mittens.cyclic.app/verify?'+value.index+'" >' +value.style+ value.status+ 
               
//                "</td><td id='emailcopy' >"+value.email+ " " +value.name+ 
//                  "</td><td>"+value.passcode+
//                    "</td><td class='usergeo'>"+' <a class="alink" onclick="geoalert()" target="iframe" href="https://whatismyipaddress.com/ip/' +value.index+ '/">' +value.status+ ' <i class="fa-solid fa-location-dot"></i></a>'+"</td><td>"+
//                ' <a class="alink" onclick="agentalert()"  title="'+value.UserAgent+'" data-content="'+value.UserAgent+'" target="iframe"  href="https://gs.statcounter.com/detect?useragent='+value.visitorsip+'/">UA <i class="fa-solid fa-street-view"></i></a>'
// +"</td><td>"+value.This_came_from+ '<i class="fa-solid fa-down-left-and-up-right-to-center"></i>' +" </td><td id='idholder'>" +'<a class="idholder" target="iframe" href="https://average-ruby-mittens.cyclic.app/delete?'+value._id+'" id="lnkidholder"  onclick="return getlnkx()"><i class="fa-regular fa-trash-can"></i> </a>' +"</td><td style='display:none;'>"+"  "+"</td></tr>";

// $('.table').append(records);

//                   })
         
                 

                 const dbreff = ref(db)
    remove(child(dbref, 'pageviews/'  )).then((snapshot)=>{
                    if(snapshot){
                        console.log(snapshot.size)
                        document.getElementById('view_counter_text').innerHTML =  snapshot.size 


    
                    }
                  })

         
}






}, 3000)








// setInterval(()=>{
//     const dbref = ref(db)
//     remove(child(dbref, 'pageviews/'  )).then((snapshot)=>{
//                     if(snapshot){
//                         console.log(snapshot.size)
//                         document.getElementById('view_counter_text').innerHTML =  snapshot.size 

//                     }
//                   })

// }, 2999)
       
  
    });






 