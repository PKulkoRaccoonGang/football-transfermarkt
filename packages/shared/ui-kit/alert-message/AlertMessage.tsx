import type { FC } from 'react';
import { Alert } from 'react-bootstrap';

import { ButtonLink } from '../button-link';

interface AlertMessageProps {
	title: string;
	hasLink?: boolean;
	linkTitle?: string;
	destination?: string;
	variant?: string;
}

export const AlertMessage: FC<AlertMessageProps> = ({ title, hasLink, linkTitle, destination, variant }) => {
	return (
		<div className="container text-center not-found-container">
			<Alert variant={variant} className="text-center">
				{title}
			</Alert>
			{hasLink && (
				<ButtonLink className="mt-auto custom-button" path={destination || '#'}>
					{linkTitle || ''}
				</ButtonLink>
			)}
		</div>
	);
};
