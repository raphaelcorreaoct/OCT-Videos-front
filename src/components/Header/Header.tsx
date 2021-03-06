import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
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
					<div>
						<h3>{user.name}</h3>
						<span>{user.email}</span>
					</div>

					{user.avatar && typeof user.avatar === 'string' ? (
						<img src={user.avatar} alt={user.email} />
					) : (
						<HiOutlineUserCircle size={30} />
					)}
				</div>
			</div>
		</header>
	);
}
