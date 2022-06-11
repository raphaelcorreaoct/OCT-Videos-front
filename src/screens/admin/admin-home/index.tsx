import React from 'react';
import { Layout } from '../../../components/Layout/Layout';
import { authUseAction } from '../../../state/AuthState/AuthUseActions';

export default function AdminHome() {
	const AuthActions = authUseAction();

	return (
		<Layout>
			<div>
				Você está logado
				<button onClick={AuthActions.logout}> Logout</button>
			</div>
		</Layout>
	);
}
