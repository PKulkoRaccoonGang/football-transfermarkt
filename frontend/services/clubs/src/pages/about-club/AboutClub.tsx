import { useParams, Link } from 'react-router-dom';
import { Row, Col, Alert } from 'react-bootstrap';

import { placeholderImage } from '../constants';
import ClubImage from './components/ClubImage';
import ClubDetails from './components/ClubDetails';
import ClubPlayers from './components/ClubPlayers';
import clubs from './__mocks__/club';

const AboutClub = () => {
	const { id } = useParams();
	const clubId = Number.parseInt(id, 10);
	const club = clubs.find((club) => club.id === clubId);

	if (!club) {
		return (
			<div className="container text-center not-found-container">
				<Alert variant="danger" className="text-center">
					🚫 Club not found.
				</Alert>
				<Link className="mt-auto custom-button" to="/clubs">
					⬅ Back to Clubs
				</Link>
			</div>
		);
	}

	const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
		event.currentTarget.src = placeholderImage;
	};

	return (
		<div className="about-club-container">
			<Row className="align-items-center">
				<Col md={6}>
					<ClubImage imageSrc={club.image} clubName={club.name} onError={handleImageError} />
				</Col>
				<Col md={6}>
					<ClubDetails club={club} />
				</Col>
			</Row>
			<ClubPlayers clubId={clubId} club={club} onError={handleImageError} />
		</div>
	);
};

export default AboutClub;
