import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import  { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Inicio from './Inicio/Inicio';
import './App.css';

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Route path="/futeca" component={Inicio}></Route>
          <Route exact path="/" render={ () => <Redirect to="/futeca"/> }></Route>
        </div>
      </Router>
    );
  }

};

 export default App;
