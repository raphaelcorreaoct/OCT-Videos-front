import React from 'react';
import './sidebar.scss';
import {
	HiOutlineVideoCamera,
	HiOutlineChat,
	HiOutlineChartPie,
	HiOutlineNewspaper,
	HiOutlineUsers,
	HiOutlineUserCircle,
} from 'react-icons/hi';
import { AiOutlineSetting } from 'react-icons/ai';

export default function Sidebar() {
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
					</nav>
				</div>
			</menu>
		</aside>
	);
}
