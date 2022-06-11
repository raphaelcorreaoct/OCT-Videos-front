import React, { FormEvent, useState } from 'react';
import { AuthLogin } from '../../services/api';
import './login.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authUseAction } from '../../state/AuthState/AuthUseActions';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Must be a valid email')
		.max(255)
		.required('Email is required'),
	password: Yup.string().max(255).required('Password is required'),
});

const formInitialValues = { email: '', password: '' };

export default function index() {
	const AuthActions = authUseAction();

	const formik = useFormik({
		initialValues: formInitialValues,
		validationSchema: validationSchema,
		onSubmit: (values) => {
			AuthLogin(values)
				.then((data) => {
					AuthActions.onLoginSuccess(data);
				})
				.catch((err) => {
					alert(`Algo deu errado: ${err.message}`);
				});
		},
	});

	const getClass = (name: 'password' | 'email') => {
		if (formik.errors[name]) {
			return 'error';
		}
		return '';
	};

	return (
		<main className="login">
			<div className="wrapper">
				<div className="wrapp-all">
					<header>
						<img src="/assets/oct-logo.svg" alt="OCT Videos" className="logo" />
						<h2>Faça seu login e comece a criar!</h2>
					</header>
					<div className="card">
						<form onSubmit={formik.handleSubmit}>
							<div className="form-group">
								<label>E-mail</label>
								<input
									type="text"
									{...formik.getFieldProps('email')}
									className={getClass('email')}
								/>
							</div>
							<div className="form-group">
								<label>Senha</label>
								<input
									type="password"
									{...formik.getFieldProps('password')}
									className={getClass('password')}
								/>
							</div>
							<div className="form-group">
								<button> Login </button>
							</div>
							<hr />
							<footer>
								<a href="/signup">Cadastre-se</a>
								<a href="/cadastr-se">Eequeci minha senha</a>
							</footer>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
}
