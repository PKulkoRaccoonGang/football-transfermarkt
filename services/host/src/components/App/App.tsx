import { Link, Outlet } from "react-router-dom";
import { playersRoutes } from '@packages/shared/src/routes/players';
import { playerRoutes } from '@packages/shared/src/routes/player';
import { clubsRoutes } from '@packages/shared/src/routes/clubs';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas, Row, Col } from 'react-bootstrap';

import './App.scss';

export const App = () => {
    return (
        <>
            <header>
                <Navbar className="bg-primary navbar-dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/" className="text-uppercase fw-bold">
                            Football App
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Menu</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link as={Link} to={playersRoutes.main} className="text-white">Players</Nav.Link>
                                    <Nav.Link as={Link} to={playerRoutes.main} className="text-white">Player</Nav.Link>
                                    <Nav.Link as={Link} to={clubsRoutes.main} className="text-white">Clubs</Nav.Link>
                                    <NavDropdown title="More" id="nav-dropdown">
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-light">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </header>

            <main>
                <Container className="mt-4">
                    <Outlet />
                </Container>
            </main>

            <footer className="bg-dark text-white text-center py-4 mt-5">
                <Container>
                    <Row>
                        <Col md={4}>
                            <h5>Football App</h5>
                            <p>&copy; {new Date().getFullYear()} Football App, All rights reserved.</p>
                        </Col>
                        <Col md={4}>
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to={playersRoutes.main} className="text-white">Players</Link></li>
                                <li><Link to={clubsRoutes.main} className="text-white">Clubs</Link></li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <h5>Follow Us</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white">Twitter</a></li>
                                <li><a href="#" className="text-white">Facebook</a></li>
                                <li><a href="#" className="text-white">Instagram</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};