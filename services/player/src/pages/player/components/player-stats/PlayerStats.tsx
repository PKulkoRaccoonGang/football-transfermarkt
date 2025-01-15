import { ListGroup } from 'react-bootstrap';

const PlayerStats = () => {
	return (
		<>
			<h3 className="stats-title">Player Stats</h3>
			<ListGroup className="player-stats">
				<ListGroup.Item>
					<strong>Matches Played:</strong> 1000+
				</ListGroup.Item>
				<ListGroup.Item>
					<strong>Goals Scored:</strong> 800+
				</ListGroup.Item>
				<ListGroup.Item>
					<strong>Assists:</strong> 350+
				</ListGroup.Item>
				<ListGroup.Item>
					<strong>Ballon d'Ors:</strong> 7
				</ListGroup.Item>
				<ListGroup.Item>
					<strong>FIFA World Cup:</strong> 1 (2022)
				</ListGroup.Item>
			</ListGroup>
		</>
	);
};

export default PlayerStats;
