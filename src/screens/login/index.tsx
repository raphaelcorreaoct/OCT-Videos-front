import React from 'react';
import './login.css';

export default function index() {
	return (
		<main>
			<div className="wrapper">
				<div className="wrapp-all">
					<header>
						<img src="/assets/oct-logo.svg" alt="OCT Videos" className="logo" />
						<h2>Faça seu login e comece a criar!</h2>
					</header>
					<div className="card">
						<form action="">
							<div className="form-group">
								<label>E-mail</label>
								<input type="text" />
							</div>
							<div className="form-group">
								<label>Senha</label>
								<input type="password" />
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
