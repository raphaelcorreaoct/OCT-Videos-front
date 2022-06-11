import { combineReducers } from 'redux';
import { authReducer } from './AuthState/AuthReducer';
import { AuthLoginResponse } from '../services/apiTypes';

export interface ReducerProps {
	auth: AuthLoginResponse;
}

const rootReducer = combineReducers({
	auth: authReducer,
});

export default rootReducer;
