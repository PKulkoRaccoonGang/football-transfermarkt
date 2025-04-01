import axios from 'axios';

import { convertToCamelCase } from './utils';

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export const registerNewUser = async (data: { userName: string; email: string; password: string }) => {
	try {
		const preparedData = {
			username: data.userName,
			email: data.email,
			password: data.password,
		};

		const response = await axios.post(`${BASE_API_URL}authn/register/`, preparedData);
		const responseData = convertToCamelCase(response.data);

		localStorage.setItem('access_token', responseData.access);
		localStorage.setItem('refresh_token', responseData.refresh);
		localStorage.setItem('user', JSON.stringify(responseData.user));

		return responseData;
	} catch (error) {
		handleApiError(error);
	}
};

export const fetchUserData = async () => {
	try {
		const accessToken = localStorage.getItem('access_token');

		if (!accessToken) throw new Error('No access token found');

		const response = await axios.get(`${BASE_API_URL}authn/user/`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		return response.data;
	} catch (error) {
		console.error('Failed to fetch user:', error);
		throw new Error('Failed to fetch user');
	}
};

export const loginUser = async (data: { userName: string; password: string }) => {
	try {
		const preparedData = {
			username: data.userName,
			password: data.password,
		};

		const response = await axios.post(`${BASE_API_URL}authn/token/`, preparedData);
		const responseData = response.data;

		localStorage.setItem('access_token', responseData.access);
		localStorage.setItem('refresh_token', responseData.refresh);

		const user = await fetchUserData();
		localStorage.setItem('user', JSON.stringify(user));

		return { user, ...responseData };
	} catch (error) {
		console.error('Login failed:', error);
		throw new Error('Invalid credentials');
	}
};

const handleApiError = (error: { response: { data: { detail: string } }; message: string }) => {
	if (axios.isAxiosError(error)) {
		console.error('Axios Error:', error.response?.data || error.message);
		throw new Error(error.response?.data?.detail || 'Something went wrong');
	} else {
		console.error('Unexpected Error:', error);
		throw new Error('Unexpected error occurred');
	}
};
