import axios, { AxiosRequestConfig } from 'axios';
import { store } from '../state/store';
import { AuthLoginResponse } from './apiTypes';

export const getHeader = (): AxiosRequestConfig => {
	//const token = localStorage.getItem('oct_token');
	const authStore = store.getState().auth as AuthLoginResponse;

	if (authStore.token)
		return {
			headers: {
				authorization: `Bearer ${authStore.token}`,
			},
		};

	return {};
};

const instance = axios.create({
	baseURL: 'http://localhost:3331',
	timeout: 1000,
});

export default instance;
