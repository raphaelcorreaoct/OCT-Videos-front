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
	const { data } = await instance.post<AuthLoginResponse>('/auth', {
		email,
		password,
	});
	return data;
};

export const CreateAccount = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	const { data } = await instance.post<{ message: string }>('/user', {
		email,
		password,
	});
	return data;
};

export default instance;
