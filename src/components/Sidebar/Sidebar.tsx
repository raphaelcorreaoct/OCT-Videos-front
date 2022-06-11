import React from 'react';
import './sidebar.scss';
import {
	HiOutlineVideoCamera,
	HiOutlineChat,
	HiOutlineChartPie,
	HiOutlineNewspaper,
	HiOutlineUsers,
	HiOutlineUserCircle,
	HiOutlineLogout,
} from 'react-icons/hi';
import { AiOutlineSetting } from 'react-icons/ai';
import { authUseAction } from '../../state/AuthState/AuthUseActions';

export default function Sidebar() {
	const AuthActions = authUseAction();

	return (
		<aside className="admin__sidebar">
			<div className="logo">
				<img src="/assets/oct-logo-secondary.svg" alt="OCT Videos" />
			</div>

			<menu>
				<div className="menu-section">
					<h6>Menu Principal</h6>
					<nav>
						<a href="#">
							<HiOutlineVideoCamera />
							Videos
						</a>
						<a href="#">
							<HiOutlineChat />
							Menssagens
						</a>
					</nav>
				</div>

				<div className="menu-section">
					<h6>Wokrspace</h6>
					<nav>
						<a href="#">
							<HiOutlineChartPie />
							Métricas
						</a>
						<a href="#">
							<HiOutlineNewspaper />
							Páginas
						</a>
						<a href="#">
							<HiOutlineUsers />
							Assinates
						</a>
					</nav>
				</div>

				<div className="menu-section">
					<h6>Geral</h6>
					<nav>
						<a href="#">
							<HiOutlineUserCircle />
							Minha conta
						</a>
						<a href="#">
							<AiOutlineSetting />
							Configurações
						</a>
						<a
							href="#"
							onClick={(event) => {
								event.preventDefault();
								AuthActions.logout();
							}}
						>
							<HiOutlineLogout />
							Sair
						</a>
					</nav>
				</div>
			</menu>
		</aside>
	);
}
