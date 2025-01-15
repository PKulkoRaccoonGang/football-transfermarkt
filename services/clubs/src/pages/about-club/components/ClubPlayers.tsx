import { Table } from 'react-bootstrap';

import { ButtonLink } from '@packages/shared/src/components/button-link';

import { placeholderImage } from '../../constants';

type Player = {
	id: number;
	firstName: string;
	lastName: string;
	position: string;
	contract: string;
	photo?: string;
};

type Club = {
	players: Player[];
};

type ClubPlayersProps = {
	club: Club;
	clubId: number;
	onError?: React.ReactEventHandler<HTMLImageElement>;
};

const ClubPlayers: React.FC<ClubPlayersProps> = ({ club, onError }) => {
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
						<th>Contract Expiry</th>
						<th>Details</th>
					</tr>
				</thead>
				<tbody>
					{club.players.map((player) => (
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
							<td>{player.contract}</td>
							<td>
								<ButtonLink title="Profile" path="/player" />
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default ClubPlayers;
