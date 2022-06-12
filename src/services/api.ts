import axios, { AxiosRequestConfig } from 'axios';

export const getHeader = (): AxiosRequestConfig => {
	const token = localStorage.getItem('oct_token');

	if (token)
		return {
			headers: {
				authorization: `Bearer ${token}`,
			},
		};

	return {};
};

const instance = axios.create({
	baseURL: 'http://localhost:3331',
	timeout: 1000,
});

export default instance;
