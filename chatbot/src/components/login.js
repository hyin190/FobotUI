import React from 'react';
import './login.css';
import '../App.css';
import { useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword} from "../firebase";

export default function Login() {
  
  const [password, setPassword] = React.useState("")
  const [emailUserName, setEmail] = React.useState("")
  const [info, setInfo] = React.useState("")
  const [user, loading, error] = useAuthState(auth);
  var  history= useHistory();


  function handleLoginButton() {
   
    const data = { password: password, flag: emailUserName }
    if(password === ''|| emailUserName===''){
      setInfo("Please Enter All Your Login Information!");
    }
    else{
      signInWithEmailAndPassword(emailUserName, password)
    }
  }

  return (
    <div className="card">
      <div className="card--header ">
        <p className='title'>Login</p>
      </div>
        <div className="card--body">
          <div>
         
            <label>Email/Username</label>
            <input
              value={emailUserName}
              type="text"
              onChange={e=>setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              value={password}
              type="password"
              onChange={e=>setPassword(e.target.value)
            }
            />
          </div>
        </div>
        <button
          type="submit" 
          id="signup" 
          className="btn_sign-up"
          onClick={handleLoginButton} 
          >
          Login
            </button>
        {<p className="link"><Link to="/register">Register</Link></p>}
    </div>
  );
}

