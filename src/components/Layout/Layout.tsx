import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './layout.scss';

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="admin">
			<Header />
			<Sidebar />
			<main>{children}</main>
		</div>
	);
};
