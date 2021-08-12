// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: "AIzaSyCI2vdERLGu3nKte9s2iX8zBNGcuLNw9kQ",
    authDomain: "test-bot-hldq.firebaseapp.com",
    databaseURL: "https://test-bot-hldq-default-rtdb.firebaseio.com",
    projectId: "test-bot-hldq",
    storageBucket: "test-bot-hldq.appspot.com",
    messagingSenderId: "102684075085",
    appId: "1:102684075085:web:8856a30e60aa994b94e804"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics()

export default firebase;