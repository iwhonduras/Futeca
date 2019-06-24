import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import logo from '../img/futeca.png';
import './Login.css';


class Login extends Component {
    render() {
        return (
            <Container>
                <img className="logo" src={logo} alt="Futeca logo"/>
                <Form className="formulario">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                </Form>
            </Container>
        );
    }
    componentWillUnmount(){
        this.Footer = this.Footer.destroy();
    }
};

export default Login;