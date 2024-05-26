import {Link, Outlet} from "react-router-dom";
import {playersRoutes} from '@packages/shared/src/routes/players';
import {playerRoutes} from '@packages/shared/src/routes/player';
import {clubsRoutes} from '@packages/shared/src/routes/clubs';
import {Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap';

import './App.scss';
// import AppLayout from '@packages/shared/src/components/Layout'

export const App = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary mb-3">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">Navbar Offcanvas</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Offcanvas placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={Link} to={playersRoutes.main}>PLAYERS</Nav.Link>
                                <Nav.Link as={Link} to={playerRoutes.main}>PLAYER</Nav.Link>
                                <Nav.Link as={Link} to={clubsRoutes.main}>CLUBS</Nav.Link>
                                <NavDropdown
                                    title="Dropdown"
                                >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Outlet/>
            <h1>Footer</h1>
        </>
    );
};

