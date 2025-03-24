import { useQuery, type UseQueryOptions, type QueryFunctionContext } from '@tanstack/react-query';

import type { Team } from '@/types';
import { fetchTeamsOrTeam } from '../api/teamsApi';
import { useStore } from '../store';

type TeamsQueryKey = ['teams'];
type TeamQueryKey = ['team', number];

/**
 * Custom hook for fetching and managing teams data.
 *
 * @param {number | null} id - The ID of the team to fetch. If null, fetches all teams.
 * @param {UseQueryOptions<Team[], Error, Team[], string[]> | UseQueryOptions<Team, Error, Team, string[]>} [options] - Options for the useQuery hook.
 * @returns {ReturnType<typeof useQuery>} - The result of the useQuery hook.
 */
export const useTeams = (
	id: number | null = null,
	options?: UseQueryOptions<Team[], Error, Team[], string[]>,
): ReturnType<typeof useQuery> => {
	const { setTeams } = useStore();
	const queryKey = id !== null ? ['team', id] : ['teams'];

	const queryFn = async ({ queryKey }: QueryFunctionContext<string[]>): Promise<Team[]> => {
		const [, teamId] = queryKey;
		const result = await fetchTeamsOrTeam(teamId ? Number.parseInt(teamId) : null);
		const teams = Array.isArray(result) ? result : [result];
		setTeams(teams);
		return teams;
	};

	return useQuery({
		queryKey,
		queryFn,
		...options,
	} as UseQueryOptions<Team[], Error, Team[], string[]>);
};

export const useTeamsList = (
	options?: Omit<UseQueryOptions<Team[], Error, Team[], TeamsQueryKey>, 'queryKey' | 'queryFn'>,
): ReturnType<typeof useQuery> => {
	const { setTeams } = useStore();
	const queryKey: TeamsQueryKey = ['teams'];

	const queryFn = async (): Promise<Team[]> => {
		const result = await fetchTeamsOrTeam(null);
		const teams = Array.isArray(result) ? result : [result];
		setTeams(teams);
		return teams;
	};

	return useQuery({
		queryKey,
		queryFn,
		...options,
	} as UseQueryOptions<Team[], Error, Team[], TeamsQueryKey>);
};

export const useTeam = (
	id: number,
	options?: Omit<UseQueryOptions<Team, Error, Team, TeamQueryKey>, 'queryKey' | 'queryFn'>,
): ReturnType<typeof useQuery> => {
	const { setTeam } = useStore();
	const queryKey: TeamQueryKey = ['team', id];

	const queryFn = async (): Promise<Team> => {
		const result = await fetchTeamsOrTeam(id);
		const team = Array.isArray(result) ? result[0] : result;
		setTeam(team);
		return team;
	};

	return useQuery({
		queryKey,
		queryFn,
		...options,
	} as UseQueryOptions<Team, Error, Team, TeamQueryKey>);
};
