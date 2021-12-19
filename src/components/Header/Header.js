
import React, { useState } from "react";
import { Col, Container, Modal, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import './Style.css';
const Menu = () => {

    
    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [fullscreen, setFullscreen] = useState(true);

    return (  
        <>
        <Navbar bg="" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home">FaridRony</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link  onClick={handleShow}>About Me</Nav.Link>
                    <Nav.Link href="#link" >Contact</Nav.Link>
                    <Nav.Link href="#link">Support</Nav.Link> 

                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> 
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Modal show={show} onHide={handleClose}  fullscreen={fullscreen}>
                  <Modal.Header closeButton> 
                  </Modal.Header>
                  <Modal.Body closeButton>
                     
                     <Container>
                         <Row className="justify-content-center align-items-center">
                             <Col>
                                {/* <img src="" alt=""> */}
                             </Col>
                             <Col>
                                <h2>Hello Members</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos officia debitis vel suscipit assumenda ducimus ad? Veniam porro assumenda eligendi perferendis, quas iste placeat eos quidem, obcaecati consequatur officia quae.</p>
                             </Col>
                         </Row>
                     </Container>
                      
                  </Modal.Body>
                  
                </Modal>
        </>

    )
}

export default Menu