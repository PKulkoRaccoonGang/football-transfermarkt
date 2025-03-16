import type { Team } from '@/types';

export interface StoreState {
	teams: Team[];
	team: Team | null;
	setTeams: (teams: Team[]) => void;
	setTeam: (team: Team) => void;
}
