import { useQuery, type UseQueryOptions, type QueryFunctionContext } from '@tanstack/react-query';

import type { Team } from '@/types';
import { fetchPlayerDetails } from '../api/teamsApi';
import { useStore } from '../store';

/**
 * Custom hook for fetching and managing player data.
 *
 * @param {number | null} id - The ID of the player to fetch.
 * @param {UseQueryOptions<Team[], Error, Team[], string[]> | UseQueryOptions<Team, Error, Team, string[]>} [options] - Options for the useQuery hook.
 * @returns {ReturnType<typeof useQuery>} - The result of the useQuery hook.
 */
interface UsePlayerOptions extends UseQueryOptions<Team[], Error, Team[], string[]> {
	onSuccess?: (data: Team[]) => void;
}

export const usePlayer = (id: number | null = null, options?: UsePlayerOptions): ReturnType<typeof useQuery> => {
	const { setPlayer } = useStore();

	const queryKey: string[] = ['player', id?.toString() ?? ''];

	const queryFn = async ({ queryKey }: QueryFunctionContext<string[]>): Promise<Team | Team[]> => {
		const [, playerId] = queryKey;
		return fetchPlayerDetails(playerId ? Number.parseInt(playerId) : null);
	};

	return useQuery({
		queryKey,
		queryFn,
		onSuccess: (data: Team[]) => {
			console.log('============= DATA =============', data);
			if (Array.isArray(data)) {
				setPlayer(data); // Handles when data is an array of teams
			}
		},
		...options, // Type assertion to bypass potential mismatched typing
	});
};
