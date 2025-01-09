import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import { placeholderImage } from '../../constants';

const ClubPlayers = ({ club, clubId, onError }) => {
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
                        <Link to={`/clubs/${clubId}/players/${player.id}`}>
                            View Details
                        </Link>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
</div>
  );
};

export default ClubPlayers;