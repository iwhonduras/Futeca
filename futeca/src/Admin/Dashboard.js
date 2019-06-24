import React, { Component } from 'react';
import { Container, Navbar, Nav, Row, Col, Table } from 'react-bootstrap';

import logo from '../img/futeca.png'

import './Dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/dashboard"><img src={logo} alt="Futeca" /></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Salir</Nav.Link>
                    </Nav>
                </Navbar>
                <Row>
                    <Col>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Active</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                            <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
                        </Nav>
                    </Col>
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
                                        <td colSpan="2">Larry the Bird</td>
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