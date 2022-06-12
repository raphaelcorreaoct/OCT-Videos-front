import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './layout.scss';

export const Layout = ({
	children,
	pageClass,
}: {
	children: React.ReactNode;
	pageClass?: string;
}) => {
	return (
		<div className={`admin ${pageClass}`}>
			<Header />
			<Sidebar />
			<main>{children}</main>
		</div>
	);
};
