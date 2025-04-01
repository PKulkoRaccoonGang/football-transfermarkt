import { create } from 'zustand';

interface User {
	id: string;
	email: string;
}

interface AuthStore {
	user: User | null;
	setUser: (userData: User | null) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
	user: null,
	setUser: (userData) => set({ user: userData }),
	logout: () => {
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		localStorage.removeItem('user');
		set({ user: null });
	},
}));
