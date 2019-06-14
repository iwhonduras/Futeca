import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../img/futeca.png';
// import logoAcerca from '../img/facerca.png';
import logoSede from '../img/falquiler.png';
import logoAcademia from '../img/facademia.png';
import logoCampeonato from '../img/fcampeonato.png';
// import logoContacto from '../img/fcontactanos.png';

import './NavBar.css';

class NavBar extends Component{
    render(){
        const NavBar = (
            <Navbar className="navbar" id="menu" bg="light" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link to="/futeca"><img className="logo-secciones" src={logo} alt="INICIO"/></Nav.Link>
                  <Nav.Link href="#link"><img className="logo-secciones"  alt="ACERCA DE"/></Nav.Link>
                  <Nav.Link href="#link"><img className="logo-secciones" src={logoSede} alt="ALQUILER"/></Nav.Link>
                  <Nav.Link href="#link"><img className="logo-secciones" src={logoAcademia} alt="ACADEMIA"/></Nav.Link>
                  <Nav.Link href="#link"><img className="logo-secciones" src={logoCampeonato} alt="CAMPEONATOS"/></Nav.Link>
                  <Nav.Link href="#link"><img className="logo-secciones"  alt="CONTÁCTO"/></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          );
      
        return(
            <div>{NavBar}</div>
        );
    }
};

export default NavBar;