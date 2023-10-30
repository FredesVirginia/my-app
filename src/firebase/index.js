// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { getMessaging } from "firebase/messaging";



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
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
 