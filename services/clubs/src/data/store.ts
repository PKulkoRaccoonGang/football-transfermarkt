import { create } from 'zustand';

import type { Team } from '@/types';
import type { StoreState } from './store.types';

export const useStore = create<StoreState>((set) => ({
	teams: [],
	team: null,
	setTeams: (teams) => set({ teams }),
	setTeam: (team: Team) => set({ team }),
}));
