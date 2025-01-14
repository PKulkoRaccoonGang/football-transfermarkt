export type Player = {
	name: string;
	position: string;
	team: string;
	age: number;
	nationality: string;
	flagCode: string;
	price: string;
	wikipediaLink: string;
	image: string;
};

export type PlayerModalProps = {
	showModal: boolean;
	handleCloseModal: () => void;
	modalType: 'buy' | 'sell';
	player: Player;
	handleConfirmAction: () => void;
};
