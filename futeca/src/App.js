import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
// web components
import Inicio from './Inicio/Inicio';
import Footer from './Footer/Footer';
// Admin
import Login from './Admin/Login';
import Dashboard from './Admin/Dashboard'
// CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/futeca" component={Inicio}></Route>
          <Route exact path="/" render={() => <Redirect to="/futeca" />}></Route>
          <Route path="/admin-login" component={Login}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Footer />
        </div>
      </Router>
    );
  }

};

export default App;
