import { ButtonLink } from '@packages/shared/src/components/button-link';

type Club = {
	name: string;
	description: string;
	founded: number;
	stadium: string;
	headCoach: string;
};

type ClubDetailsProps = {
	club: Club;
};

const ClubDetails: React.FC<ClubDetailsProps> = ({ club }) => {
	return (
		<div className="details-container">
			<h1 className="club-name">{club.name}</h1>
			<p className="club-description">{club.description}</p>
			<p>
				<strong>Founded:</strong> {club.founded}
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
					href={`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(club.headCoach)}`}
					target="_blank"
					rel="noopener noreferrer"
					className="coach-link"
				>
					{club.headCoach}
				</a>
			</p>
			<ButtonLink title="Back to Clubs" path="/clubs" />
		</div>
	);
};

export default ClubDetails;
