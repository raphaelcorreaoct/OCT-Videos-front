import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Login from './screens/login';
import ReplacePassword from './screens/login/replacePassword';
import SignUp from './screens/login/signUp';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Login />} path="/" />
				<Route element={<ReplacePassword />} path="/signup/:token" />
				<Route element={<SignUp />} path="/signup" />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
