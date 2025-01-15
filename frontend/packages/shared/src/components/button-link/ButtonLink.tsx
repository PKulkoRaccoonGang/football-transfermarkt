import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './ButtonLink.scss';

interface ButtonLinkProps {
	title: string;
	path?: string;
	variant?: 'success' | 'danger';
	type?: 'link' | 'button';
	onClick?: () => void;
	className?: string;
	hasIcon?: boolean;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
	title,
	path = '#',
	variant,
	type = 'link',
	onClick,
	className = '',
	hasIcon = true,
}) => {
	const buttonClass = `mt-auto button-link ${variant ? `button-link--${variant}` : ''} ${className}`;

	if (type === 'button') {
		return (
			<Button className={buttonClass} onClick={onClick}>
				{hasIcon && <span className="ball-icon">⚽</span>}
				{title}
			</Button>
		);
	}

	return (
		<Link className={buttonClass} to={path}>
			{hasIcon && <span className="ball-icon">⚽</span>}
			{title}
		</Link>
	);
};
