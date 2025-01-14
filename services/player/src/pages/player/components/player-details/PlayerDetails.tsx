import type { PlayerDetailsProps } from './types';

const PlayerDetails: React.FC<PlayerDetailsProps> = ({ playerData }) => {
	return (
		<>
			<h2 className="player-name">{playerData.name}</h2>
			<p>
				<strong>Position:</strong> {playerData.position}
			</p>
			<p>
				<strong>Team:</strong>{' '}
				<a href={playerData.wikipediaLink} target="_blank" rel="noopener noreferrer" className="team-link">
					{playerData.team}
				</a>
			</p>
			<p>
				<strong>Age:</strong> {playerData.age}
			</p>
			<p>
				<strong>Nationality:</strong>{' '}
				<img
					src={`https://flagcdn.com/w40/${playerData.flagCode}.png`}
					alt={playerData.nationality}
					className="player-flag"
				/>
				{playerData.nationality}
			</p>
			<p>
				<strong>Price:</strong> {playerData.price}
			</p>
			<p className="player-description">{playerData.description}</p>
		</>
	);
};

export default PlayerDetails;
