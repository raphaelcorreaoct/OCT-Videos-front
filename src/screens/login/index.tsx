import React, { FormEvent, useState } from 'react';
import { AuthLogin } from '../../services/api';
import './login.css';

export default function index() {
	const [fields, setFields] = useState({ email: '', password: '' });
	const [isLoading, setLoad] = useState(false);

	const onSubmitLogin = (event: FormEvent) => {
		event.preventDefault();
		AuthLogin(fields)
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<main>
			<div className="wrapper">
				<div className="wrapp-all">
					<header>
						<img src="/assets/oct-logo.svg" alt="OCT Videos" className="logo" />
						<h2>Faça seu login e comece a criar!</h2>
					</header>
					<div className="card">
						<form onSubmit={onSubmitLogin}>
							<div className="form-group">
								<label>E-mail</label>
								<input
									type="text"
									name="email"
									value={fields.email}
									onChange={(event) => {
										setFields((prev) => ({
											...prev,
											email: event.target.value,
										}));
									}}
								/>
							</div>
							<div className="form-group">
								<label>Senha</label>
								<input
									type="password"
									name="password"
									value={fields.password}
									onChange={(event) => {
										setFields((prev) => ({
											...prev,
											password: event.target.value,
										}));
									}}
								/>
							</div>
							<div className="form-group">
								<button> Login </button>
							</div>
							<hr />
							<footer>
								<a href="/cadastr-se">Cadastre-se</a>
								<a href="/cadastr-se">Eequeci minha senha</a>
							</footer>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
}
