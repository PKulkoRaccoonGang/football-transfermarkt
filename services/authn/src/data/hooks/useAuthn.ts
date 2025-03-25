import { create } from 'zustand';

export const useAuthStore = create((set) => ({
	user: null,
	setUser: (userData: any) => set({ user: userData }),
	logout: () => {
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		localStorage.removeItem('user');
		set({ user: null });
	},
}));
