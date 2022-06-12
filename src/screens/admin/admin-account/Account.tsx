import React from 'react';
import Card from '../../../components/Card/Card';
import { Layout } from '../../../components/Layout/Layout';
import './account.scss';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { ReducerProps } from '../../../state/rootReducer';
import {
	UpdateAccount,
	UserUpdateType,
} from '../../../services/service-account';
import { AuthLoginResponse } from '../../../services/apiTypes';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Must be a valid email')
		.max(255)
		.required('Email is required'),

	name: Yup.string().max(255).required('Digite um nome'),
	login: Yup.string().max(255).required('Digite um apelido'),
	avatar: Yup.mixed().required('File is required'),
});

export default function Account() {
	const user = useSelector((state: ReducerProps) => state.auth.user);

	const formik = useFormik({
		initialValues: user,
		validationSchema: validationSchema,
		onSubmit: (values) => {
			const { name, email, id, avatar, login } = values;

			if (name && login && avatar && typeof avatar !== 'string')
				UpdateAccount({
					name,
					email,
					id,
					avatar,
					login,
				})
					.then(() => {
						console.log('atualizado com sucesso');
					})
					.catch((err) => console.error(err));
		},
	});

	const getClass = (name: 'name' | 'email' | 'login' | 'avatar') => {
		if (formik.errors[name]) {
			return 'error';
		}
		return '';
	};

	return (
		<Layout pageClass="account">
			<Card title="Minha Conta">
				<form className="form-update-account" onSubmit={formik.handleSubmit}>
					<div className="form-update-account__column-left">
						<div className="form-group">
							<label>Nome:</label>
							<input
								type="text"
								{...formik.getFieldProps('name')}
								className={getClass('name')}
							/>
						</div>
						<div className="form-group">
							<label>E-mail:</label>
							<input
								type="text"
								{...formik.getFieldProps('email')}
								className={getClass('email')}
							/>
						</div>
						<div className="form-group">
							<label>Apelido:</label>
							<input
								type="text"
								{...formik.getFieldProps('login')}
								className={getClass('login')}
							/>
						</div>

						<div className="form-group">
							<button type="submit"> Enviar </button>
						</div>
					</div>
					<div className="form-update-account__column-right">
						<div className="form-group">
							<label>Foto:</label>
							<input
								type="file"
								{...formik.getFieldProps('avatar')}
								className={getClass('avatar')}
							/>
						</div>
					</div>
				</form>
			</Card>
		</Layout>
	);
}
