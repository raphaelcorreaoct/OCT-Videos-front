import { AuthLoginResponse } from '../../services/apiTypes';
import { AuthActionsTypes } from './AuthActionTypes';

const INITIAL_STATE: Omit<AuthLoginResponse, 'token' | 'user'> = {
	token: null,
	user: null,
};

export const authReducer = (
	state = INITIAL_STATE,
	action: { type: AuthActionsTypes; payload: AuthLoginResponse }
) => {
	switch (action.type) {
		case AuthActionsTypes.LOGIN:
			return {
				...state,
				...action.payload,
			};

		case AuthActionsTypes.LOGOUT:
			return {
				...state,
				token: null,
				user: null,
			};

		case AuthActionsTypes.REFRESH_TOKEN:
			return {
				...state,
				...action.payload,
			};

		default:
			return state;
	}
};
