import type { Team, Player } from '@/types';

export interface StoreState {
	player: Player | null;
	team: Team | null;
	setTeam: (team: Team) => void;
	setPlayer: (player: Player) => void;
}
