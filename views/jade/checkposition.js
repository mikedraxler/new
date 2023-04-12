
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
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();
// const refen = 
// 



$(document).ready(function(){

$.get("https://api.ipify.org?format=json.ip", function(json, Status){
document.getElementById('jin').value =  json
});



setInterval(()=>{
let viewers_ip = document.getElementById('jin').value
// console.log("ip " + viewers_ip)
//count aview 

// count_view(viewers_ip)


// function count_view(viewers_ip){

//     let views;
//     let  visitors = viewers_ip.toString()

//     for(var i, i=0; i <  visitors.length; i++){
//          visitors =  visitors.replace(".", "_"); 

//         console.log( visitors)
//     }



// }
      let  views = viewers_ip.toString();
let  visitorsip = views.replaceAll('.', 'x')
let visitorlist = "Visitors List"
// console.log( visitorsip)
let Status = 'visitor is looking at Recapture page'
          set(ref(db, 'pageviews/' ),{

            visitorsip,
            Status

          }).then(()=>{
            console.log('data has been stored')
          })
          .catch((error)=>{
            console.log('error' + error)
          })


          // const dbref = ref(db)
          
          // get(child(dbref, 'pageviews/'+ visitorlist  )).then((snapshot)=>{
          //   if(snapshot){
          //       console.log(snapshot.size)
          //       document.getElementById('view_counter_text').innerHTML =  snapshot.size

          //   }
          // })




  

}, 1)






});
