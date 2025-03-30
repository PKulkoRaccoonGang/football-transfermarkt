import { create } from 'zustand';

import type { Team, Player } from '@/types';
import type { StoreState } from './store.types';

export const useStore = create<StoreState>((set) => ({
	player: null,
	team: null,
	setPlayer: (player: Player) => set({ player }),
	setTeam: (team: Team) => set({ team }),
}));
