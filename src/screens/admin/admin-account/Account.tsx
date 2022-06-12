import React from 'react';
import Card from '../../../components/Card/Card';
import { Layout } from '../../../components/Layout/Layout';

export default function Account() {
	return (
		<Layout>
			<Card title="Minha Conta">
				<form className="form-update-account">
					<div className="form-update-account__column-left">
						<div className="form-group">
							<label>Nome:</label>
							<input type="text" />
						</div>
						<div className="form-group">
							<label>E-mail:</label>
							<input type="text" />
						</div>
						<div className="form-group">
							<label>Apelido:</label>
							<input type="text" />
						</div>
					</div>
					<div className="form-update-account__column-right">
						<div className="form-group">
							<label>Foto:</label>
							<input type="file" />
						</div>
					</div>
				</form>
			</Card>
		</Layout>
	);
}
