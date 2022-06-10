export interface AuthLoginResponse {
	token: string;
	user: {
		name: string | null;
		id: number;
		avatar: string | null;
		login: string | null;
		email: string;
		permission_level: number;
	};
}
