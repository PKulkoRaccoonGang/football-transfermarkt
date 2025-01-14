import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

import { clubsRoutes } from '@packages/shared/src/routes/clubs';
import { ButtonLink } from "../button-link";

import "./Header.scss";

export const Header = () => {
    return (
        <>
            <header>
                <Navbar className="bg-primary navbar-dark py-3 shadow-sm" expand="lg">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/clubs" className="text-uppercase fw-bold logo">
                            Football Transfermarkt ⚽
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
                            <Offcanvas.Body>
                                <Nav className="nav-menu justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link as={Link} to={clubsRoutes.main} className="nav-link-custom me-3">Clubs</Nav.Link>
                                    <ButtonLink title="Sing In" hasIcon={false} className="authn-btn me-3" />
                                    <ButtonLink title="Register for free" hasIcon={false} className="authn-btn" />
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};
