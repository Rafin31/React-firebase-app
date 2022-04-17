import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBarsStaggered, faX, faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assets/logo.PNG'
import './Header.css'

const Header = () => {

    const [isDrop, setIsDrop] = useState(false)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="transparent">
                <Container>

                    <Navbar.Brand className='navBarLogo'>
                        <Nav.Link href="/">
                            <img className='navbarLogo' src={logo} />
                        </Nav.Link>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav">
                        {isDrop ? <FontAwesomeIcon icon={faX} onClick={() => {
                            setIsDrop(!isDrop)
                        }} /> :
                            <FontAwesomeIcon icon={faBarsStaggered} onClick={() => {
                                setIsDrop(!isDrop)
                            }} />}


                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto navLinks text-center">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#pricing">Price</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>

                        </Nav>
                        <Nav className='text-center'>
                            <NavDropdown
                                title={
                                    <span>
                                        User  <FontAwesomeIcon icon={faAngleDown} />
                                    </span>
                                }
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;