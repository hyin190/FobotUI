import firebase from "firebase";


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
  const app = firebase.initializeApp(firebaseConfig);
  const auth = app.auth();
  const db = app.firestore();
  
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  
  const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await db.collection("users").add({
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  const sendPasswordResetEmail = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  const logout = () => {
    auth.signOut();
  };
  
  export {
    auth,
    db,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordResetEmail,
    logout,
  };