import axios from 'axios';
import { AuthLoginResponse } from './apiTypes';

const instance = axios.create({
	baseURL: 'http://localhost:3331',
	timeout: 1000,
});

export const AuthLogin = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	try {
		const { data } = await instance.post<AuthLoginResponse>('/auth', {
			email,
			password,
		});
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const CreateAccount = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	try {
		const { data } = await instance.post<AuthLoginResponse>('/auth', {
			email,
			password,
		});
		return data;
	} catch (error) {
		console.error(error);
	}
};

export default instance;
