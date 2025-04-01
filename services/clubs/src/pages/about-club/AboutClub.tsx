import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import { Loader, AlertMessage } from '@packages/shared/ui-kit';

import { useTeam } from '../../data/hooks/useTeam';
import { TeamImage, TeamDetails, TeamPlayers } from './components';
import { placeholderImage } from '../constants';

import type { Team } from '../../types';

const BASE_PAGE_PRIMARY_COLOR = '#1d3557';

const AboutClub = () => {
	const { id } = useParams();
	const teamId = Number.isNaN(Number(id)) ? null : Number.parseInt(id, 10);
	const { data, isLoading, isError } = useTeam(teamId);

	const teamData = data && typeof data === 'object' ? (data as Team) : null;

	useEffect(() => {
		const primaryColor = teamData?.primaryColor || BASE_PAGE_PRIMARY_COLOR;
		document.documentElement.style.setProperty('--primary', primaryColor);

		return () => {
			document.documentElement.style.setProperty('--primary', BASE_PAGE_PRIMARY_COLOR);
		};
	}, [teamData?.primaryColor]);

	if (isLoading) {
		return <Loader />;
	}

	if (isError || !teamData) {
		return (
			<AlertMessage
				title="🚫 Team not found."
				linkTitle="Back to Teams"
				hasLink
				variant="danger"
				destination="/clubs"
			/>
		);
	}

	const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
		event.currentTarget.src = placeholderImage;
	};

	return (
		<div className="about-club-container">
			<Row className="align-items-center">
				<Col md={6}>
					<TeamImage imageSrc={teamData.photo} teamName={teamData.name} onError={handleImageError} />
				</Col>
				<Col md={6}>
					<TeamDetails team={teamData} />
				</Col>
			</Row>
			{teamData.players?.length ? (
				<TeamPlayers team={teamData} onError={handleImageError} />
			) : (
				<AlertMessage title="🚫 No players found." variant="warning" />
			)}
		</div>
	);
};

export default AboutClub;
