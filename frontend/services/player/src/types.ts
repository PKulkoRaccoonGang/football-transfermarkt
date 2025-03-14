export interface Player {
	id: number;
	firstName: string;
	lastName: string;
	position: string;
	birthDate: string;
	team: number;
	goalsScored: number;
	assists: number;
	matchesPlayed: number;
	photo?: string;
	countryCode: string;
	jerseyNumber: number;
	marketValue: number;
	shotsOnTarget: number;
	passAccuracy: number;
	dribbleSuccess: number;
	shotAccuracy: number;
	tackleSuccess: number;
	tackles: number;
	yellowCards: number;
	redCards: number;
}

export interface Team {
	id: number;
	name: string;
	city: string;
	country: string;
	foundationYear: number;
	stadium: string;
	coach: string;
	players: Player[];
	photo: string;
	description: string;
	primaryColor: string;
}
