import React, { Component } from 'react';
import { Container, Row, Col, Form, FormControl, Button, Image } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import './Inicio.css';
import logo from '../img/futeca.png'
import idea from '../img/ideaworks.png'

class Inicio extends Component {
    componentDidMount() {
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
                    <Col className="logo" xs={6} md={4}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col className="search" xs={6} md={4}>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button type="submit">Search</Button>
                        </Form>
                    </Col>
                    <Col className="social" xs={6} md={4}>
                        <a target="_blank" href=""><i className="fab fa-facebook"></i></a>
                        <a target="_blank" href=""><i className="fab fa-instagram"></i></a>
                    </Col>
                </Row>
                <Row>
                    <Col className="video">
                        <iframe width="100%"
                            height="515"
                            src="https://www.youtube.com/embed/mGjO-yC9huE?autoplay=1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </Col>
                </Row>
                <Row>
                    <NavBar />
                </Row>
                <Row className="content">
                    {/* <!--Carousel Wrapper--> */}
                    <div id="multi-item-example" className="carousel slide carousel-multi-item col-sm-12 col-12" data-ride="carousel">

                        {/* <!--Controls--> */}
                        <div className="controls-top">
                            <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-circle-left"></i></a>
                            <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fas fa-chevron-circle-right"></i></a>
                        </div>
                        {/* <!--/.Controls--> */}

                        {/* <!--Slides--> */}
                        <div className="carousel-inner" role="listbox">

                            {/* <!--First slide--> */}
                            <div className="carousel-item active">

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card mb-2">
                                            <img className="card-img-top"
                                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                                                alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Some quick example text to build on the card title and make up the
                                                    bulk of the
                                    card's content.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 clearfix d-none d-md-block">
                                        <div className="card mb-2">
                                            <img className="card-img-top"
                                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                                                alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Some quick example text to build on the card title and make up the
                                                    bulk of the
                                    card's content.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 clearfix d-none d-md-block">
                                        <div className="card mb-2">
                                            <img className="card-img-top"
                                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                                                alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Some quick example text to build on the card title and make up the
                                                    bulk of the
                                    card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <!--/.First slide--> */}

                            {/* <!--Second slide--> */}
                            <div className="carousel-item">

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card mb-2">
                                            <img className="card-img-top"
                                                src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                                                alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Some quick example text to build on the card title and make up the
                                                    bulk of the
                                    card's content.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 clearfix d-none d-md-block">
                                        <div className="card mb-2">
                                            <img className="card-img-top"
                                                src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                                                alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Some quick example text to build on the card title and make up the
                                                    bulk of the
                                    card's content.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 clearfix d-none d-md-block">
                                        <div className="card mb-2">
                                            <img className="card-img-top"
                                                src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                                                alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Some quick example text to build on the card title and make up the
                                                    bulk of the
                                    card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <!--/.Second slide--> */}

                            {/* <!--Third slide--> */}
                            <div className="carousel-item">

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card mb-2">
                                            <img className="card-img-top"
                                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                                                alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Some quick example text to build on the card title and make up the
                                                    bulk of the
                                    card's content.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 clearfix d-none d-md-block">
                                        <div className="card mb-2">
                                            <img className="card-img-top"
                                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                                                alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Some quick example text to build on the card title and make up the
                                                    bulk of the
                                    card's content.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 clearfix d-none d-md-block">
                                        <div className="card mb-2">
                                            <img className="card-img-top"
                                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                                                alt="Card image cap" />
                                            <div className="card-body">
                                                <h4 className="card-title">Card title</h4>
                                                <p className="card-text">Some quick example text to build on the card title and make up the
                                                    bulk of the
                                    card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <!--/.Third slide--> */}

                        </div>
                        {/* <!--/.Slides--> */}

                    </div>
                    {/* <!--/.Carousel Wrapper--> */}
                    <Row>
                        <Col className="patrocinadores" xs={6} md={4}>
                            <h2>PATROCINADORES</h2>

                        </Col>
                    </Row>
                    <Container className="img-brand">
                        <Row>
                            <Col xs={6} md={4}>
                                <Image src={idea} width="171px" height="180px" alt="ideawork" rounded />
                            </Col>
                            <Col xs={6} md={4}>
                                <Image src={idea} width="171px" height="180px" alt="ideawork" rounded />
                            </Col>
                            <Col xs={6} md={4}>
                                <Image src={idea} width="171px" height="180px" alt="ideawork" rounded />
                            </Col>
                            <Col xs={6} md={4}>
                                <Image src={idea} width="171px" height="180px" alt="ideawork" rounded />
                            </Col>
                            <Col xs={6} md={4}>
                                <Image src={idea} width="171px" height="180px" alt="ideawork" rounded />
                            </Col>
                            <Col xs={6} md={4}>
                                <Image src={idea} width="171px" height="180px" alt="ideawork" rounded />
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        );
    };

};

export default Inicio;