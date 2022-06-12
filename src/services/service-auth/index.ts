import instance from '../api';
import { AuthLoginResponse } from '../apiTypes';

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
