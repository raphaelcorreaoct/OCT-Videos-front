import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Login from './screens/login';
// import Sobre from './Sobre';
// import Usuario from './Usuario';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Login />} path="/" />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
