import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Alert } from 'react-bootstrap';

import { Loader } from '@packages/shared/src/components/loader';
import { useTeam } from '../../../data/hooks/useTeam';
import { placeholderImage } from '../constants';
import ClubImage from './components/ClubImage';
import ClubDetails from './components/ClubDetails';
import ClubPlayers from './components/ClubPlayers';

const AboutClub = () => {
	const { id } = useParams();
	const clubId = Number.parseInt(id, 10);
  const { data: club, isLoading, isError } = useTeam(clubId);

	useEffect(() => {
    document.documentElement.style.setProperty("--primary", club?.primaryColor);

    return () => {
      document.documentElement.style.setProperty("--primary", "#ff7e5f");
    };
  }, [club]);

	if (isLoading) {
		return <Loader />;
	}

	if (isError) {
		return <div>Failed to fetch club</div>;
	}

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
					<ClubImage imageSrc={club.photo} clubName={club.name} onError={handleImageError} />
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
