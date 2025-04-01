import { Accordion } from 'react-bootstrap';

import type { FC } from 'react';
import type { PlayerStatsChartContainerProps } from './types';

const PlayerStatsChartContainer: FC<PlayerStatsChartContainerProps> = ({
	chartTitle,
	className,
	eventKey,
	children,
}) => {
	return (
		<Accordion.Item eventKey={eventKey}>
			<Accordion.Header>{chartTitle}</Accordion.Header>
			<Accordion.Body>
				<div className={className}>{children}</div>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default PlayerStatsChartContainer;
