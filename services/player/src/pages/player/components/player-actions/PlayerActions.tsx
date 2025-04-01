import { Stack } from 'react-bootstrap';

import { ButtonLink } from '@packages/shared/ui-kit';

import type { FC } from 'react';
import type { PlayerActionsProps } from './types';

const PlayerActions: FC<PlayerActionsProps> = ({ handleBuyPlayer, handleSellPlayer }) => {
	return (
		<Stack gap={3} direction="vertical" className="player-actions">
			<ButtonLink
				className="player-action-button"
				variant="success"
				type="button"
				onClick={handleBuyPlayer}
				aria-label="Buy a player"
			>
				Buy a player
			</ButtonLink>
			<ButtonLink
				className="player-action-button"
				variant="danger"
				type="button"
				onClick={handleSellPlayer}
				aria-label="Sell a player"
			>
				Sell a player
			</ButtonLink>
		</Stack>
	);
};

export default PlayerActions;
