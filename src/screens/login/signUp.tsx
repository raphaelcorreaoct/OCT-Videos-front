import React from 'react';
import './login.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CreateAccount } from '../../services/api';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Must be a valid email')
		.max(255)
		.required('Email is required'),
	password: Yup.string().max(255).required('Password is required'),
	psswConfirm: Yup.string().oneOf(
		[Yup.ref('password'), null],
		'Passwords must match'
	),
});
const formInitialValues = { email: '', password: '', psswConfirm: '' };

export default function SignUp() {
	const formik = useFormik({
		initialValues: formInitialValues,
		validationSchema: validationSchema,
		onSubmit: (values) => {
			CreateAccount(values)
				.then((data) => {
					console.log(data);
				})
				.catch((err) => {
					alert('Algo deu errado, tente novamente mais tarde!');
				});
		},
	});

	const getClass = (name: 'password' | 'email' | 'psswConfirm') => {
		if (formik.errors[name]) {
			return 'error';
		}
		return '';
	};

	return (
		<main>
			<div className="wrapper">
				<div className="wrapp-all">
					<header>
						<img src="/assets/oct-logo.svg" alt="OCT Videos" className="logo" />
						<h2>Cadastre-se!</h2>
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
								<label>Confirmar Senha</label>
								<input
									type="password"
									{...formik.getFieldProps('psswConfirm')}
									className={getClass('psswConfirm')}
								/>
							</div>
							<div className="form-group">
								<button> Login </button>
							</div>
							<hr />
							<footer>
								<a href="/login">Fazer login</a>
								<a href="/cadastr-se">Eequeci minha senha</a>
							</footer>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
}
