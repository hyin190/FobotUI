import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import "./login.css";
// import Alert from "@material-ui/lab/Alert";
import firebase from "../firebase";



export default function Register() {
  const [userName, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [c_password, setCPassowrd] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [info, setInfo] = React.useState("");
  var history = useHistory();

  function handleReg() {
    const data = { userName: userName, password: password, email: email };
    if (userName === "" || password === "" || email === "") {
      setInfo("Please Fill All the Field!");
    }
    else if (password !== c_password) {
      setInfo("Confirm Password Does Not Match the Password!");
    }
    else if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email))) {
      setInfo("Please Enter a Vaild Email Address!");
    }

    if ((userName !== "") & (password !== "") & (email !== "") & (/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email))) {
    //   if (password === c_password) {
    //     socket.emit("register", data);
    //   }
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
    }
  }

  function handleNavToLogin() {
    history.push("/login");
  }

 
  return (
    <div className="card">
      <div className="card--header ">
        <p className="title">Sign up</p>
      </div>
      <div className="card--body">
        <div>
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            onChange={(e) => {
              setCPassowrd(e.target.value);
            }}
          />
        </div>
      </div>
      <button onClick={handleReg} type="submit" id="signup" class="btn_sign-up">
        Register
      </button>
      <p className="link">
        <a onClick={handleNavToLogin}>Login</a>
      </p>
    </div>
  );
}
