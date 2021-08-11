import Login from './components/login';
import Register from "./components/register";
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <Login></Login> */}
    //     <Register></Register>
        
    //   </header>
    // </div>
    <Router>
      <Switch>
        <div>
        <Route exact path='/'>
            <div>
                <Register></Register>
            </div>
          </Route>

          <Route exact path='/register'>
            <div className="App">
                <Register></Register>
            </div>
          </Route>

          <Route exact path='/login'>
            <div className="App">
                <Login/>
            </div>
          </Route>

        </div>
      </Switch>
    </Router>
  );
}

export default App;
