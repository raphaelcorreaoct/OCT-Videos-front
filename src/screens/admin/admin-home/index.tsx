import React from 'react';
import { authUseAction } from '../../../state/AuthState/AuthUseActions';

export default function AdminHome() {
	const AuthActions = authUseAction();

	return (
		<div>
			Você está logado
			<button onClick={AuthActions.logout}> Logout</button>
		</div>
	);
}
