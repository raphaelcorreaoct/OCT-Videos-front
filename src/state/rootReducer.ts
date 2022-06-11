import { combineReducers } from 'redux';
import { AuthProps } from './types';
import { authReducer } from './AuthState/AuthReducer';

export interface ReducerProps {
	auth: AuthProps;
}

const rootReducer = combineReducers({
	auth: authReducer,
});

export default rootReducer;
