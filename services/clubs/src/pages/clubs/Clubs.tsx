import { Row, Col, Card, Badge, Stack } from 'react-bootstrap';

import { ButtonLink, Loader, AlertMessage } from '@packages/shared/ui-kit';

import { useTeams } from '../../data/hooks/useTeams';
import { placeholderImage } from '../constants';

import type { Team } from '@/types';

const Clubs = () => {
	const { data, isLoading, isError } = useTeams();

	const teamData: Team[] = Array.isArray(data) ? data : [];

	const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
		event.currentTarget.src = placeholderImage;
	};

	if (isLoading) {
		return <Loader />;
	}

	if (isError) {
		return <AlertMessage title="🚫 Ooops... Something happened..." variant="danger" />;
	}

	return (
		<div className="clubs-container">
			<Row>
				{teamData.map((team) => (
					<Col md={4} sm={6} xs={12} key={team.id} className="mb-4">
						<Card className="club-card h-100 shadow-lg">
							<div className="image-container">
								<Card.Img
									variant="top"
									src={team.photo || placeholderImage}
									onError={handleImageError}
									alt={team.name}
									className="club-image"
								/>
							</div>
							<Card.Body className="d-flex flex-column">
								<Card.Title className="club-title">FC {team.name}</Card.Title>
								<Stack direction="horizontal" gap={3} className="justify-content-center mb-3">
									<Badge className="club-description-badge px-3 py-2" pill>
										Country: {team.country}
									</Badge>
									<Badge className="club-description-badge px-3 py-2" pill>
										Coach: {team.coach}
									</Badge>
								</Stack>
								<ButtonLink path={`/clubs/${team.id}`} className="mt-auto">
									View Club
								</ButtonLink>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Clubs;
