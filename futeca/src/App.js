import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import  { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Inicio from './Inicio/Inicio';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    const NavBar = (
      <Navbar className="navbar" bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  
    return (
      <Router>
        <div className="App">
          {NavBar}
          <Route path="/futeca" component={Inicio}></Route>
          <Route exact path="/" render={ () => <Redirect to="/futeca"/> }></Route>
        </div>
      </Router>
    );
  }

};

 export default App;