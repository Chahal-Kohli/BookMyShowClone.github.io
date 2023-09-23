import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated, logout } = useAuth0();
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container fluid>
                    <Navbar.Brand href="#">IGDTUW</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/results">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <NavDropdown title="User Registration and Login" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/register">Admission Form</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                        {isAuthenticated && (
                            <div style={{ color: "white", height: "45px", width: "45px" }}>
                                <img style={{ color: "white", height: "45px", width: "45px" }} src={user.picture} alt={user.name} />
                            </div>
                        )
                        }
                        {
                            isAuthenticated ?
                                <Button style={{ padding: "10px ", margin: "15px" }} onClick={() => logout({ returnTo: window.location.origin })}>
                                    Log Out
                                </Button>
                                :
                                <Button style={{ padding: "10px ", margin: "15px" }} onClick={() => loginWithRedirect()}>Log In</Button>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ background: "black", color: "white", padding: "20px", }}>
                {/* <a> First option </a>
                <a> Second option </a> */}
            </div>
        </div>
    );
}

export default Header;
