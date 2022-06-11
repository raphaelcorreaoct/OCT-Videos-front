import React from 'react';
import { useSelector } from 'react-redux';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AdminHome from './screens/admin/admin-home';

import Login from './screens/login';
import ReplacePassword from './screens/login/replacePassword';
import SignUp from './screens/login/signUp';
import { ReducerProps } from './state/rootReducer';

const LoginStack = () => {
	return (
		<Routes>
			<Route element={<Login />} path="/" />
			<Route element={<ReplacePassword />} path="/signup/:token" />
			<Route element={<SignUp />} path="/signup" />
		</Routes>
	);
};

const AppStack = () => {
	return (
		<Routes>
			<Route element={<AdminHome />} path="/" />
		</Routes>
	);
};

const AppRoutes = () => {
	const loggedIn = useSelector(
		(state: ReducerProps) => state.auth.token !== null
	);

	return (
		<BrowserRouter>{loggedIn ? <AppStack /> : <LoginStack />}</BrowserRouter>
	);
};

export default AppRoutes;
