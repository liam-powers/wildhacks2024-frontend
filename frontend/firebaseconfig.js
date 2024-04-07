// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFunctions, httpsCallable } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9p8C6f47xxvfCYLX8eE4SMsrXMLVwsiw",
  authDomain: "wildhacks-2024.firebaseapp.com",
  projectId: "wildhacks-2024",
  storageBucket: "wildhacks-2024.appspot.com",
  messagingSenderId: "526794667201",
  appId: "1:526794667201:web:30a256160a00bcddf45040",
  measurementId: "G-PTGVEKXX2T"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase
const functions = getFunctions(app);