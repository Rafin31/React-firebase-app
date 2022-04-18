import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import {
    faBarsStaggered,
    faX,
    faAngleDown,
    faUser,
    faGear,
    faSignOut
} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Card, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../Assets/logo.PNG'
import './Header.css'
import { toast, ToastContainer } from 'react-toastify';

const Header = () => {

    const [isDrop, setIsDrop] = useState(false)
    const [show, setShow] = useState(false);
    const [user, loading, error] = useAuthState(auth);


    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    const logout = (e) => {
        e.preventDefault()
        signOut(auth)
        toast("Signing out")
    }


    if (loading) {
        toast("Please wait")
    }

    if (user) {
        const displayName = user.email.split("@")

    }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="transparent">
                <Container>

                    <Navbar.Brand className='navBarLogo'>
                        <Nav.Link href="/">
                            <img className='navbarLogo w-75' src={logo} alt="logo" />
                        </Nav.Link>

                    </Navbar.Brand>
                    <Navbar.Toggle className='fw-bolder' aria-controls="responsive-navbar-nav">
                        {isDrop ? <FontAwesomeIcon icon={faX} onClick={() => {
                            setIsDrop(!isDrop)
                        }} /> :
                            <FontAwesomeIcon icon={faBarsStaggered} onClick={() => {
                                setIsDrop(!isDrop)
                            }} />}


                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto navLinks text-center">
                            <Nav.Link href="/" active >Home</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#pricing">Price</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>

                        </Nav>

                        {
                            user ?
                                <>
                                    <Nav className='text-center'>
                                        <NavDropdown
                                            title={
                                                < span >
                                                    {user.email.split("@")[0]} < FontAwesomeIcon icon={faAngleDown} />
                                                </span>
                                            }
                                            id="collasible-nav-dropdown"
                                            show={show}
                                            onMouseEnter={showDropdown}
                                            onMouseUp={() => { setShow(!show) }}
                                            onMouseLeave={hideDropdown}

                                        >
                                            <Card >
                                                <Card.Body >
                                                    <NavDropdown.Item href="">
                                                        <FontAwesomeIcon icon={faUser} />  Profile
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item href="">
                                                        <FontAwesomeIcon icon={faGear} /> Settings
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item href="" onClick={logout}>
                                                        <FontAwesomeIcon icon={faSignOut} /> Log out
                                                    </NavDropdown.Item>
                                                </Card.Body>
                                            </Card>
                                        </NavDropdown>

                                    </Nav>
                                </>
                                :
                                <>
                                    <Nav className='text-center'>
                                        <Link className='signinButton' to={'/login'}>Sing in</Link>
                                    </Nav>
                                </>
                        }




                    </Navbar.Collapse>
                </Container>
            </Navbar >
            <ToastContainer autoClose={1000} />
        </div >
    );
};

export default Header;