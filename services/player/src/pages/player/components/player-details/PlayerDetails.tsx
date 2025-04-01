import { useMemo } from 'react';

import type { PlayerDetailsProps } from './types';
import { calculateAge } from './utils';

import type { FC } from 'react';

const PlayerDetails: FC<PlayerDetailsProps> = ({ playerData }) => {
	const formattedMarketValue = useMemo(
		() =>
			new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(playerData.marketValue ?? 0),
		[playerData.marketValue],
	);

	const flagUrl = useMemo(
		() => `https://flagcdn.com/w40/${playerData.countryCode.toLowerCase()}.webp`,
		[playerData.countryCode],
	);

	return (
		<div className="player-details">
			<h2 className="player-name">
				{playerData.firstName} {playerData.lastName}
			</h2>
			<p>
				<strong>Position:</strong> {playerData.position}
			</p>
			<p>
				<strong>Team:</strong> {playerData.team}
			</p>
			<p>
				<strong>Market Value (in USD):</strong> {formattedMarketValue}
			</p>
			<p>
				<strong>Age:</strong> {calculateAge(playerData.birthDate)}
			</p>
			<p className="player-country">
				<strong>Country:</strong>{' '}
				<img
					src={flagUrl}
					alt={`Flag of ${playerData.countryCode}`}
					className="flag"
					width={24}
					height={16}
					loading="lazy"
				/>
			</p>
			<p>
				<strong>Jersey number:</strong> {playerData.jerseyNumber}
			</p>
		</div>
	);
};

export default PlayerDetails;
