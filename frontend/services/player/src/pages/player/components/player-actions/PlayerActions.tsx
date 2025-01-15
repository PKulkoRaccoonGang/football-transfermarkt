import type { PlayerActionsProps } from './types';

import { ButtonLink } from '@packages/shared/src/components/button-link';

const PlayerActions: React.FC<PlayerActionsProps> = ({ handleBuyPlayer, handleSellPlayer }) => {
	return (
		<>
			<ButtonLink className="mb-3" title="Buy a player" variant="success" type="button" onClick={handleBuyPlayer} />
			<ButtonLink title="Sell a player" variant="danger" type="button" onClick={handleSellPlayer} />
		</>
	);
};

export default PlayerActions;
