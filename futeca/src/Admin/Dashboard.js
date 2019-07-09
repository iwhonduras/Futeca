import React, { Component } from 'react';
import { Container, Navbar, Nav, Row, Col, Table } from 'react-bootstrap';

import logo from '../img/futeca.png';
// import logoAcerca from '../img/facerca.png';
import logoSede from '../img/falquiler.png';
import logoAcademia from '../img/facademia.png';
import logoCampeonato from '../img/fcampeonato.png';
// import logoContacto from '../img/fcontactanos.png';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            seccion: "INICIO"
        }
    }
    render() {
        const NavBar = (
            <Navbar className="navbar" id="menu" bg="light" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link to="/futeca" onClick={() => {this.setState({seccion:"INICIO"});}}><img className="logo-secciones" src={logo} alt="INICIO"/></Nav.Link>
                    <Nav.Link href="#link" onClick={() => {this.setState({seccion:"ACERCA DE"});}}><img className="logo-secciones"  src={logo} alt="ACERCA DE"/></Nav.Link>
                    <Nav.Link href="#link" onClick={() => {this.setState({seccion:"ALQUILER"});}}><img className="logo-secciones" src={logoSede} alt="ALQUILER"/></Nav.Link>
                    <Nav.Link href="#link" onClick={() => {this.setState({seccion:"ACADEMIA"});}}><img className="logo-secciones" src={logoAcademia} alt="ACADEMIA"/></Nav.Link>
                    <Nav.Link href="#link" onClick={() => {this.setState({seccion:"CAMPEONATO"});}}><img className="logo-secciones" src={logoCampeonato} alt="CAMPEONATOS"/></Nav.Link>
                    <Nav.Link href="#link" onClick={() => {this.setState({seccion:"CONTÁCTO"});}}><img className="logo-secciones-final"  src={logo} alt="CONTÁCTO"/></Nav.Link>
                    <Nav.Link href="#link">Salir</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          );
        return (
            <Container>
                {NavBar}
                <Row>
                    <h1 className="tituloDinamico">ADMINISTRACION DE {this.state.seccion}</h1>
                </Row>
                <Row>
                    <Col>
                        <Container>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry the Bird</td>
                                        <td>--------------</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Dashboard;