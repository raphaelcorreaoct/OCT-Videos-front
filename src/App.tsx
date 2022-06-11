import React from 'react';
import AppRoutes from './routes';
import { store } from './state/store';
import { Provider } from 'react-redux';

function App() {
	return (
		<Provider store={store}>
			<AppRoutes />
		</Provider>
	);
}

export default App;
