import { useQuery } from '@tanstack/react-query';

import { fetchTeams } from '../api/teamsApi';
import { useStore } from '../store';

export const useTeams = () => {
	const { setTeams } = useStore();
	const queryKey = ['teams'];

	const queryFn = async () => {
		const data = await fetchTeams();
		if (Array.isArray(data)) {
			setTeams(data);
		}
		return data;
	};

	return useQuery({
		queryKey,
		queryFn,
	});
};
