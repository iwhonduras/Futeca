import React, { Component } from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import './Inicio.css';
import logo from '../img/futeca.png'

class Inicio extends Component {
    componentDidMount(){
        window.onscroll = function () { myFunction() };

        const header = document.getElementById("menu");
        const sticky = header.offsetTop;

        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    }
    render() {
        
        return (
            <Container>
                <Row className="header">
                    <Col className="logo">
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col className="search">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button type="submit">Search</Button>
                        </Form>
                    </Col>
                    <Col className="social">
                        <a target="_blank" href=""><i class="fab fa-facebook"></i></a>
                        <a target="_blank" href=""><i class="fab fa-instagram"></i></a>
                    </Col>
                </Row>
                <Row>
                    <Col className="video">
                        <iframe width="100%"
                            height="515"
                            src="https://www.youtube.com/embed/mGjO-yC9huE?autoplay=1"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </Col>
                </Row>
                <Row>
                    <NavBar/>
                </Row>
                <Row className="content">

                </Row>
            </Container>
        );
    };

};

export default Inicio;