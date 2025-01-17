import { ButtonLink } from '@packages/shared/src/components/button-link';

type Club = {
	name: string;
	description: string;
	foundationYear: number;
	stadium: string;
	coach: string;
};

type ClubDetailsProps = {
	club: Club;
};

const ClubDetails: React.FC<ClubDetailsProps> = ({ club }) => {
	return (
		<div className="details-container">
			<h1 className="club-name">FC {club.name}</h1>
			<p className="club-description">{club?.description}</p>
			<p>
				<strong>Founded:</strong> {club.foundationYear}
			</p>
			<p>
				<strong>Country:</strong> {club.country}
			</p>
			<p>
				<strong>City:</strong> {club.city}
			</p>
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
					href={`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(club.coach)}`}
					target="_blank"
					rel="noopener noreferrer"
					className="coach-link"
				>
					{club.coach}
				</a>
			</p>
			<ButtonLink title="Back to Clubs" path="/clubs" />
		</div>
	);
};

export default ClubDetails;
