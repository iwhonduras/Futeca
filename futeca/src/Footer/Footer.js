import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Footer.css';

class Footer extends Component{
    render(){
        const Footer = (
            <Row>    
                <Row className="up-section">
                    <h4>DIRECCION</h4>
                    <p>Residencial El Trapiche (Calle 3, atras de Plaza Santa Monica), Tegucigalpa. </p>
                </Row>
                <Row className="down-section">
                    <p>Todos los derechos reservados para Futeca Honduras 2019.©</p>
                </Row>
            </Row>    
        );
        return(
            <div className="footer-section">{Footer}</div>
        );
    }
};

export default Footer;