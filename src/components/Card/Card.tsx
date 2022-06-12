import React from 'react';
import './card.scss';
export default function Card({
	title,
	children,
	renderFooter,
	renderHeader,
}: {
	title?: string;
	children?: React.ReactNode;
	renderFooter?: React.ReactNode;
	renderHeader?: React.ReactNode;
}) {
	return (
		<div className="card">
			{title && (
				<div className="card__header">
					<h4>{title}</h4>
					{renderHeader && (
						<div className="card__header-right">{renderHeader}</div>
					)}
				</div>
			)}
			{children && <div className="card__body">{children}</div>}
			{renderFooter && <div className="card__footer"></div>}
		</div>
	);
}
