import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

import { clubsRoutes } from '@packages/shared/ui-kit/routes/clubs';
import { ButtonLink } from '../button-link';

import './Header.scss';

export const Header = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	const handleLogout = () => {
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		localStorage.removeItem('user');
		setUser(null);
	};

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
									<Nav.Link as={Link} to={clubsRoutes.main} className="nav-link-custom me-3">
										Clubs
									</Nav.Link>

									{user ? (
										<>
											<ButtonLink hasIcon={false} className="authn-btn me-3" path="/profile">
												{user.username}
											</ButtonLink>
											<ButtonLink hasIcon={false} className="authn-btn" type="button" onClick={handleLogout}>
												Logout
											</ButtonLink>
										</>
									) : (
										<>
											<ButtonLink hasIcon={false} className="authn-btn me-3" path="/login">
												Sign In
											</ButtonLink>
											<ButtonLink hasIcon={false} className="authn-btn" path="/register">
												Register for free
											</ButtonLink>
										</>
									)}
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			</header>
		</>
	);
};
