import { Table } from "react-bootstrap";

import { ButtonLink } from "@packages/shared/src/components/button-link";

import { placeholderImage } from "../../constants";

type Player = {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  birthDate: string;
  team: number;
  goalsScored: number;
  assists: number;
  matchesPlayed: number;
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
            <th>Birth Date</th>
            <th>Goals Scored</th>
            <th>Assists</th>
            <th>Matches Played</th>
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
              <td>{player.birthDate}</td>
              <td>{player.goalsScored}</td>
              <td>{player.assists}</td>
              <td>{player.matchesPlayed}</td>
              <td>
                <ButtonLink title="Profile" path={`/player/${player.id}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ClubPlayers;
