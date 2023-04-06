// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';

import Constants from 'expo-constants'; 
// Your web app's Firebase configuration


const firebaseConfig = {


  apiKey: "AIzaSyAdFZ5vhaPFpQxaBb8Cb6LXjS-ilRAd7Ns",
  authDomain: "retirementapp-f92ab.firebaseapp.com",
  projectId: "retirementapp-f92ab",
  storageBucket: "retirementapp-f92ab.appspot.com",
  messagingSenderId: "970782105099",
  appId: "1:970782105099:web:8520b07ccce26a283f710e"


};




// Initialize Firebase


const app = initializeApp(firebaseConfig);

export const auth = getAuth();

