import { combineReducers } from 'redux';
import { AuthProps } from './types';

export interface ReducerProps {
	auth: AuthProps;
}

const rootReducer = combineReducers({});

export default rootReducer;
