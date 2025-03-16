import type { Player } from '@/types';

export type PlayerModalProps = {
	showModal: boolean;
	handleCloseModal: () => void;
	modalType: 'buy' | 'sell';
	player: Player;
	handleConfirmAction: () => void;
};
