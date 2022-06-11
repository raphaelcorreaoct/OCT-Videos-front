import React from 'react';
import { useSelector } from 'react-redux';
import { ReducerProps } from '../../state/rootReducer';
import './header.scss';

export default function Header() {
	const user = useSelector((state: ReducerProps) => state.auth.user);

	return (
		<header className="admin__header">
			<div className="wrapper">
				<h2>Painel de controle</h2>
				<div className="user-menu">
					<h3>{user.name}</h3>
					<span>{user.email}</span>
				</div>
			</div>
		</header>
	);
}
