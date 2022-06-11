import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk);
export const store = createStore(
	persistedReducer,
	compose(
		middleware
		//Reactotron.createEnhancer(),
	)
);
export const persistor = persistStore(store);
