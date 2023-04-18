// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
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
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
