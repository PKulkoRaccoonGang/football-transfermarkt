import { create } from "zustand";

interface Team {
  id: number;
  name: string;
}

interface StoreState {
  teams: Team[];
  setTeams: (teams: Team[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  teams: [],
  team: null,
  setTeams: (teams) => set({ teams }),
  setTeam: (team) => set({ team }),
}));
