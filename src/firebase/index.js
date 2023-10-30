// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { getMessaging, getToken } from "firebase/messaging";



const firebaseConfig = {
  apiKey: "AIzaSyA_CE84Bo8bies8EjQwhzCMYaPBwqIFHjY",
  authDomain: "firefise-shooping.firebaseapp.com",
  projectId: "firefise-shooping",
  storageBucket: "firefise-shooping.appspot.com",
  messagingSenderId: "208414627162",
  appId: "1:208414627162:web:4601b305106d94df1d8f63",
  measurementId: "G-5S463MWX1P"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const vapidKey = "BETlaoi-RhzF7UspHOJl2sUvah9xQh_hWJtulY9x8mleV_Kgmh8pQkg6HxoOUZLXFTF_qqVgh7ko6NGd0TWGUhc"
  const messaging = getMessaging(app);
  getToken(messaging , {vapidKey})
      .then(currentToken =>{
        if(currentToken){
          console.log("El token es " , currentToken);
        } else{
          console.log("No registration")
        }
      }).catch((error)=>{
        console.log("Ocurrio un error");
        console.log(error);
      })
