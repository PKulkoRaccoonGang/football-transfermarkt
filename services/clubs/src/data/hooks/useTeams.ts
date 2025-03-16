import { useQuery, type UseQueryOptions, type QueryFunctionContext } from '@tanstack/react-query';

import type { Team } from '@/types';
import { fetchTeamsOrTeam } from '../api/teamsApi';
import { useStore } from '../store';

/**
 * Custom hook for fetching and managing teams data.
 *
 * @param {number | null} id - The ID of the team to fetch. If null, fetches all teams.
 * @param {UseQueryOptions<Team[], Error, Team[], string[]> | UseQueryOptions<Team, Error, Team, string[]>} [options] - Options for the useQuery hook.
 * @returns {ReturnType<typeof useQuery>} - The result of the useQuery hook.
 */
export const useTeams = (
	id: number | null = null,
	options?: UseQueryOptions<Team[], Error, Team[], string[]> | UseQueryOptions<Team, Error, Team, string[]>,
): ReturnType<typeof useQuery> => {
	const { setTeams } = useStore();
	const queryKey = id !== null ? ['team', id] : ['teams'];

	const queryFn = async ({ queryKey }: QueryFunctionContext<string[]>): Promise<Team | Team[]> => {
		const [, teamId] = queryKey;
		return fetchTeamsOrTeam(teamId ? Number.parseInt(teamId) : null);
	};

	return useQuery({
		queryKey,
		queryFn,
		onSuccess: (data: Team[]) => {
			if (Array.isArray(data)) {
				setTeams(data); // Handles when data is an array of teams
			}
		},
		...options, // Type assertion to bypass potential mismatched typing
	});
};
