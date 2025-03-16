import type { FC } from 'react';
import { useMemo } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Accordion } from 'react-bootstrap';

import { getCardsData, getIntegerData, getPercentageData } from './datasets';
import { barOptions, lineOptions, pieOptions, registerCharts } from './chart-config';
import PlayerStatsChartContainer from './PlayerStatsChartContainer';
import type { PlayerStats } from './types';

registerCharts();

const PlayerStatsCharts: FC<{ stats: PlayerStats }> = ({ stats }) => {
	const charts = useMemo(
		() => [
			{
				title: 'Percentage Statistics',
				className: 'percentage-statistics-chart-container',
				eventKey: '0',
				ChartComponent: Bar,
				data: getPercentageData(stats),
				options: barOptions,
			},
			{
				title: 'Integer Statistics',
				className: 'integer-statistics-chart-container',
				eventKey: '1',
				ChartComponent: Line,
				data: getIntegerData(stats),
				options: lineOptions,
			},
			{
				title: 'Cards Statistics',
				className: 'cards-statistics-chart-container',
				eventKey: '2',
				ChartComponent: Pie,
				data: getCardsData(stats),
				options: pieOptions,
			},
		],
		[stats],
	);

	return (
		<Accordion className="player-stats-charts" defaultActiveKey="0">
			{charts.map(({ title, className, eventKey, ChartComponent, data, options }) => (
				<PlayerStatsChartContainer key={eventKey} chartTitle={title} className={className} eventKey={eventKey}>
					<ChartComponent data={data} options={options} />
				</PlayerStatsChartContainer>
			))}
		</Accordion>
	);
};

export default PlayerStatsCharts;
