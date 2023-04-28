// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/auth';
import {getAuth} from "firebase/auth"
import Constants from 'expo-constants';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzawUE2efcRfCaPkJ7P3wfCnyU0Ne24LQ",
  authDomain: "retirementappfinal.firebaseapp.com",
  projectId: "retirementappfinal",
  storageBucket: "retirementappfinal.appspot.com",
  messagingSenderId: "161519228032",
  appId: "1:161519228032:web:0d997a299814f975424265"
  //docID: zqA6iFEMeWSjLp5QLLxw
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
