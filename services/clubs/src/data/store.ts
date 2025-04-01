import { create } from 'zustand';

import type { StoreState } from './store.types';

import type { Team } from '@/types';

export const useStore = create<StoreState>((set) => ({
	teams: [],
	team: null,
	setTeams: (teams) => set({ teams }),
	setTeam: (team: Team) => set({ team }),
}));
