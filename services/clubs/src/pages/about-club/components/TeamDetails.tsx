import { ButtonLink } from '@packages/shared/ui-kit';

import type { Team } from '@/types';

type TeamDetailsComponentProps = {
	team: Team;
};

const TeamDetails: React.FC<TeamDetailsComponentProps> = ({ team }) => {
	const renderField = (label: string, value?: string | number, isLink = false) => {
		if (!value) return null;
		const content = isLink ? (
			<a
				href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value.toString())}`}
				target="_blank"
				rel="noopener noreferrer"
				className="stadium-link"
			>
				{value}
			</a>
		) : (
			value
		);

		return (
			<p>
				<strong>{label}:</strong> {content}
			</p>
		);
	};

	return (
		<div className="details-container">
			<h1 className="club-name">FC {team.name}</h1>
			{team.description && <p className="club-description">{team.description}</p>}
			{renderField('Founded', team.foundationYear ?? 'N/A')}
			{renderField('Country', team.country)}
			{renderField('City', team.city)}
			{renderField('Stadium', team.stadium, true)}
			{team.coach && (
				<p>
					<strong>Head Coach:</strong>{' '}
					<a
						href={`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(team.coach)}`}
						target="_blank"
						rel="noopener noreferrer"
						className="coach-link"
					>
						{team.coach}
					</a>
				</p>
			)}
			<ButtonLink path="/clubs" aria-label="Back to Teams">
				Back to Teams
			</ButtonLink>
		</div>
	);
};

export default TeamDetails;
