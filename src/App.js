import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./HomePage";
import Login from "./Login";
import Startup from "./Startup";
import Register from "./Register";
import "./kawolegal.css"
import "./login.css"
import "./startup.css"
import "./register.css"
import { BrowserRouter, Route } from "react-router-dom";



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Route  exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/startup" component={Startup} />
          <Route path="/register" component={Register}/>
      </BrowserRouter>
    )
  }
}

export default App;
