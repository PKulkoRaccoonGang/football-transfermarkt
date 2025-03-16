import axios from 'axios';

import type { Team } from '@/types';
import { convertToCamelCase } from './utils';

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

/**
 * Fetches teams or a specific team by ID from the API.
 *
 * @param {number | null} [id=null] - The ID of the team to fetch. If null, fetches all teams.
 * @returns {Promise<Team | Team[]>} - A promise resolving to a single team or a list of teams.
 */
export const fetchTeamsOrTeam = async (id: number | null = null): Promise<Team | Team[]> => {
	try {
		const url = id !== null ? `${BASE_API_URL}teams/${id}/` : `${BASE_API_URL}teams/`;
		const response = await axios.get<Team | Team[]>(url);
		return convertToCamelCase(response.data);
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error('Axios Error:', error.message);
		} else {
			console.error('Unexpected Error:', error);
		}
		throw new Error(id !== null ? `Failed to fetch team with id ${id}` : 'Failed to fetch teams');
	}
};
