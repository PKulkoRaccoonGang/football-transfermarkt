import axios from 'axios';

import type { Team } from '@/types';
import { convertToCamelCase } from './utils';

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const fetchPlayerDetails = async (id: number) => {
	try {
		const response = await axios.get(`${BASE_API_URL}players/${id}`);
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

export const fetchVideo = async ({ query }: { query: string }) => {
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
