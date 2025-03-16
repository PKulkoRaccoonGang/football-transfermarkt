import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { clubsRoutes } from '@packages/shared/ui-kit/routes/clubs';

import './Footer.scss';

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row>
					<Col md={4}>
						<h5 className="footer-title">Football Transfermarkt</h5>
						<p className="footer-text">
							&copy; {new Date().getFullYear()} Football Transfermarkt, All rights reserved.
						</p>
					</Col>
					<Col md={4}>
						<h5 className="footer-title">Quick Links</h5>
						<ul className="footer-list">
							<li>
								<Link to={clubsRoutes.main} className="footer-link">
									Clubs
								</Link>
							</li>
						</ul>
					</Col>
					<Col md={4}>
						<h5 className="footer-title">Follow Us</h5>
						<ul className="footer-list">
							<li>
								<a href="/" className="footer-link">
									Twitter
								</a>
							</li>
							<li>
								<a href="/" className="footer-link">
									Facebook
								</a>
							</li>
							<li>
								<a href="/" className="footer-link">
									Instagram
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
