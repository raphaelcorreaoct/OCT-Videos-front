import { useDispatch } from 'react-redux';
import { AuthLoginResponse } from '../../services/apiTypes';
import { AuthActionsTypes } from './AuthActionTypes';

export const authUseAction = () => {
	const dispatch = useDispatch();

	return {
		onLoginSuccess: (data: AuthLoginResponse) => {
			dispatch({ type: AuthActionsTypes.LOGIN, payload: data });
		},
		logout: () => {
			dispatch({ type: AuthActionsTypes.LOGOUT });
		},
	};
};
