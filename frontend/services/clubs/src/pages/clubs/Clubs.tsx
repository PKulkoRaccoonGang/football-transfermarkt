import { Row, Col, Card, Badge, Stack } from 'react-bootstrap';

import { placeholderImage } from '../constants';
import { useTeams } from '../../../data/hooks/useTeams';

import { ButtonLink } from '@packages/shared/src/components/button-link';
import { Loader } from '@packages/shared/src/components/loader';

const Clubs = () => {
	const { data: teams, isLoading, isError } = useTeams();
	const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
		event.currentTarget.src = placeholderImage;
	};

	if (isLoading) {
		return <Loader />;
	}

	if (isError) {
		return <div>Failed to fetch clubs</div>;
	}
	return (
		<div className="clubs-container">
			<Row>
				{teams.map((club) => (
					<Col md={4} sm={6} xs={12} key={club.id} className="mb-4">
						<Card className="club-card h-100 shadow-lg">
							<div className="image-container">
								<Card.Img
									variant="top"
									src={club.photo || placeholderImage}
									onError={handleImageError}
									alt={club.name}
									className="club-image"
								/>
							</div>
							<Card.Body className="d-flex flex-column">
								<Card.Title className="club-title">FC {club.name}</Card.Title>
								<Card.Text className="club-description">
								<Stack direction="horizontal" gap={3} className="justify-content-center">
									<Badge className="px-3 py-2">
										Country: {club.country}
									</Badge>
									<Badge className="px-3 py-2">
										Coach: {club.coach}
									</Badge>
								</Stack>
							</Card.Text>
								<ButtonLink title="View Club" path={`/clubs/${club.id}`} />
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Clubs;
