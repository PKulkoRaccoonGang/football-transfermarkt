import axios from 'axios';

import { convertToCamelCase } from './utils';

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export const fetchTeams = async () => {
	try {
		const response = await axios.get(`${BASE_API_URL}teams/`);
		return convertToCamelCase(response.data);
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error('Axios Error:', error.message);
		} else {
			console.error('Unexpected Error:', error);
		}
		throw new Error('Failed to fetch teams');
	}
};

export const fetchTeam = async (id: number) => {
	try {
		const response = await axios.get(`${BASE_API_URL}teams/${id}/`);
		return convertToCamelCase(response.data);
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error('Axios Error:', error.message);
		} else {
			console.error('Unexpected Error:', error);
		}
		throw new Error(`Failed to fetch team with id ${id}`);
	}
};
