import { Link } from "react-router-dom";

const ClubDetails = ({ club }) => {
  return (
    <div className="details-container">
        <h1 className="club-name">{club.name}</h1>
        <p className="club-description">{club.description}</p>
        <p><strong>Founded:</strong> {club.founded}</p>
        <p>
            <strong>Stadium:</strong>{' '}
            <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(club.stadium)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="stadium-link"
            >
                {club.stadium}
            </a>
        </p>
        <p>
            <strong>Head Coach:</strong>{' '}
            <a
                href={`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(club.headCoach)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="coach-link"
            >
                {club.headCoach}
            </a>
        </p>
        <Link className="back-to-clubs-btn btn btn-success mt-4" to="/clubs">
            ⬅ Back to Clubs
        </Link>
    </div>
  )
};

export default ClubDetails;
