import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { fetchPlayerDetails } from '../api/teamsApi';
import { useStore } from '../store';

import type { Player } from '@/types';

export const usePlayer = (id: number | null) => {
	const { setPlayer } = useStore();

	const queryKey: string[] = ['player', id?.toString() ?? ''];

	const queryFn = async () => {
		return fetchPlayerDetails(id);
	};

	return useQuery({
		queryKey,
		queryFn,
		onSuccess: (data: Player) => {
			setPlayer(data);
		},
	} as UseQueryOptions<Player, Error>);
};
