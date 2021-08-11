// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    // ...
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: "AIzaSyAdjeObL8_wLLg1_shH6OHqFQihkO2NMhw",
    authDomain: "chatbot-f36b5.firebaseapp.com",
    projectId: "chatbot-f36b5",
    storageBucket: "chatbot-f36b5.appspot.com",
    messagingSenderId: "701879203276",
    appId: "1:701879203276:web:0a1b18e3f5881248949969",
    measurementId: "G-P6LRXBD71F"
  };