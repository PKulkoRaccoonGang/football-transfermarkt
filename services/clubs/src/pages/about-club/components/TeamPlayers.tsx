import { Table } from 'react-bootstrap';

import { ButtonLink } from '@packages/shared/ui-kit';

import { placeholderImage } from '../../constants';

import type { Team } from '@/types';
import type { TeamPlayersComponentProps } from './types';

const TeamPlayers: React.FC<TeamPlayersComponentProps> = ({ team, onError }) => {
	const renderPlayerRow = (player: Team['players'][number]) => (
		<tr key={player.id}>
			<td>
				<img
					src={player.photo || placeholderImage}
					alt={`${player.firstName} ${player.lastName}`}
					className="player-photo"
					onError={onError}
				/>
			</td>
			<td>{player.firstName}</td>
			<td>{player.lastName}</td>
			<td>{player.position}</td>
			<td>{player.birthDate}</td>
			<td>{player.goalsScored}</td>
			<td>{player.assists}</td>
			<td>{player.matchesPlayed}</td>
			<td>
				<ButtonLink path={`/player/${player.id}`}>Profile</ButtonLink>
			</td>
		</tr>
	);

	return (
		<div className="players-container mt-5">
			<h2>Players</h2>
			<Table striped bordered hover responsive className="players-table">
				<thead>
					<tr>
						<th>Photo</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Position</th>
						<th>Birth Date</th>
						<th>Goals Scored</th>
						<th>Assists</th>
						<th>Matches Played</th>
						<th>Details</th>
					</tr>
				</thead>
				<tbody>{team.players.map(renderPlayerRow)}</tbody>
			</Table>
		</div>
	);
};

export default TeamPlayers;
