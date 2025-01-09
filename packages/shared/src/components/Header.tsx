import { Link } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

import { playerRoutes } from '@packages/shared/src/routes/player';
import { clubsRoutes } from '@packages/shared/src/routes/clubs';

export const Header = () => {
    return (
        <>
            <header>
                <Navbar className="bg-primary navbar-dark py-3 shadow-sm" expand="lg">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/" className="text-uppercase fw-bold logo">
                            Football App ⚽
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title className="offcanvas-title">Menu</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link as={Link} to={playerRoutes.main} className="nav-link-custom">Players</Nav.Link>
                                    <Nav.Link as={Link} to={clubsRoutes.main} className="nav-link-custom">Clubs</Nav.Link>
                                    <NavDropdown title="More" id="nav-dropdown" className="dropdown-custom">
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex search-form">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search players or clubs"
                                        className="me-2 search-input"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-light" className="search-button">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};
