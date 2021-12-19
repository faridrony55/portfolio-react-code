
 import React from "react";
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import Icofont from 'react-icofont';
import './Style.css';

const HeroBanner = () => {
    return (  
        <section className="HeroBanner">
            <Container>
                <Row  className="justify-content-center align-items-center">
                    <Col className="text-center">
                        <p> Front End Design . Wordpress . SHopify . Bigcommerce . React </p>
                        <h1>Get Stors for your digital products</h1>
                        <NavLink  href="#" className="btn-custom"  variant="danger" >Explore My Works <Icofont icon="icofont-double-right"/> </NavLink>   
                    </Col>
                </Row>
            </Container>
        </section> 
    )
}

export default HeroBanner