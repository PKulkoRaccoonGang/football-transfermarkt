import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import type { ButtonLinkProps } from './ButtonLink.types';

import './ButtonLink.scss';

export const ButtonLink: React.FC<ButtonLinkProps> = ({
	path = '#',
	variant,
	type = 'link',
	onClick,
	className = '',
	hasIcon = true,
	children,
	disabled,
}) => {
	const buttonClass = `mt-auto button-link ${variant ? `button-link--${variant}` : ''} ${className}`;

	if (type === 'button') {
		return (
			<Button className={buttonClass} onClick={onClick} disabled={disabled} type="submit">
				{hasIcon && <span className="ball-icon">⚽</span>}
				{children}
			</Button>
		);
	}

	return (
		<Link className={buttonClass} to={path}>
			{hasIcon && <span className="ball-icon">⚽</span>}
			{children}
		</Link>
	);
};
