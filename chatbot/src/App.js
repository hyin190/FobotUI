import Login from './components/login';
import Register from "./components/register";
// import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Addproduct from './components/sections/Addproductcontent';
import Addproductcontent from './components/sections/Addproductcontent';

function App() {
  return (
    <div className="App">
      <Router basename={'/chatbot'}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
