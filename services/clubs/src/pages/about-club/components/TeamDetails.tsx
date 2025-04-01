import { ButtonLink } from '@packages/shared/ui-kit';

import { GOOGLE_MAPS_QUERY_URL, WIKIPEDIA_SEARCH_URL } from './constants';

import type { TeamDetailsComponentProps } from './types';

const TeamDetails: React.FC<TeamDetailsComponentProps> = ({ team }) => {
	const renderField = (label: string, value?: string | number, isLink = false) => {
		if (!value) return null;
		const content = isLink ? (
			<a
				href={`${GOOGLE_MAPS_QUERY_URL}${encodeURIComponent(value.toString())}`}
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
						href={`${WIKIPEDIA_SEARCH_URL}${encodeURIComponent(team.coach)}`}
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
