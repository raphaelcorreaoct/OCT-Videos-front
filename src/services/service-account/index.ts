import instance, { getHeader } from '../api';
import { AuthLoginResponse } from '../apiTypes';

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

export type UserUpdateType = {
	email: string;
	name: string;
	avatar: File;
	login: string;
	id: number;
};

export const UpdateAccount = async ({
	email,
	name,
	avatar,
	login,
	id,
}: UserUpdateType) => {
	const headers = getHeader();
	const { data } = await instance.post<{ message: string }>(
		`/user/${id}`,
		{
			email,
			name,
			avatar,
			login,
		},
		headers
	);
	return data;
};
