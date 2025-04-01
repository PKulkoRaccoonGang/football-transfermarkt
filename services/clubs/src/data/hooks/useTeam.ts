import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { fetchTeam } from '../api/teamsApi';
import { useStore } from '../store';

import type { Team } from '@/types';

export const useTeam = (id: number | null) => {
	const { setTeams } = useStore();
	const queryKey = ['team', id?.toString() ?? ''];

	const queryFn = async () => {
		return fetchTeam(id ?? 0);
	};

	return useQuery({
		queryKey,
		queryFn,
		onSuccess: (data: Team) => {
			if (Array.isArray(data)) {
				setTeams(data);
			}
		},
	} as UseQueryOptions<Team, Error>);
};
