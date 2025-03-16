import axios from 'axios';

import type { Team } from '@/types';
import { convertToCamelCase } from './utils';

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

/**
 * Fetches player or a specific player ID from the API.
 *
 * @param {number | null} [id=null] - The ID of the player to fetch.
 * @returns {Promise<Team | Team[]>} - A promise resolving to a player.
 */
export const fetchPlayerDetails = async (id: number | null = null): Promise<Team | Team[]> => {
	try {
		const url = `${BASE_API_URL}players/${id}`;
		const response = await axios.get<Team | Team[]>(url);
		return convertToCamelCase(response.data);
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error('Axios Error:', error.message);
		} else {
			console.error('Unexpected Error:', error);
		}
		throw new Error(`Failed to fetch player with id ${id}`);
	}
};

/**
 * Fetches the first YouTube video based on a given search query.
 *
 * @param {Object} params - The parameters for the API request.
 * @param {string} params.query - The search query (e.g., player's name + "highlights").
 * @returns {Promise<{ videoId: string; title: string } | null>}
 * A promise that resolves with the video details or `null` if no video is found.
 *
 * @example
 * fetchVideo({ query: "Lionel Messi highlights" }).then(video => {
 *   console.log(video.videoId); // e.g., "dQw4w9WgXcQ"
 *   console.log(video.title); // e.g., "Lionel Messi's Best Goals"
 * });
 */
export const fetchVideo = async ({ query }: { query: string }): Promise<{ videoId: string; title: string } | null> => {
	const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&key=${GOOGLE_API_KEY}`;

	try {
		const response = await axios.get(url);
		const video = response.data.items[0];

		if (video) {
			return {
				videoId: video.id.videoId,
				title: video.snippet.title,
			};
		}

		return null;
	} catch (error) {
		console.error('Error fetching YouTube video:', error);
		return null;
	}
};
