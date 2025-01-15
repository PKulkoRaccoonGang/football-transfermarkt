export type Player = {
	name: string;
	position: string;
	team: string;
	wikipediaLink: string;
	age: number;
	nationality: string;
	flagCode: string;
	price: string | number;
	description: string;
};

export type PlayerDetailsProps = {
	playerData: Player;
};
