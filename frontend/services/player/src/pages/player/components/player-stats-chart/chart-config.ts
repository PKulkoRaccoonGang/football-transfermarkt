import type { ChartOptions } from 'chart.js';
import {
	Chart as ChartJS,
	BarElement,
	LineElement,
	PointElement,
	CategoryScale,
	LinearScale,
	ArcElement,
	Tooltip,
	Legend,
} from 'chart.js';

/**
 * Registers the required Chart.js components globally.
 */
export const registerCharts = () => {
	ChartJS.register(BarElement, LineElement, PointElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);
};

/**
 * Configuration options for a bar chart.
 * These options define the chart's responsiveness, aspect ratio, axis orientation, and plugins like legend display.
 */
export const barOptions: ChartOptions<'bar'> = {
	responsive: true,
	maintainAspectRatio: false,
	indexAxis: 'x',
	plugins: {
		legend: {
			display: true,
		},
	},
};

/**
 * Configuration options for a line chart.
 * These options define the chart's responsiveness, aspect ratio, legend display, and axis scaling.
 */
export const lineOptions: ChartOptions<'line'> = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
	scales: {
		x: {
			beginAtZero: true,
		},
		y: {
			beginAtZero: true,
		},
	},
};

/**
 * Configuration options for a pie chart.
 * These options define the chart's responsiveness, aspect ratio, and legend position.
 */
export const pieOptions: ChartOptions<'pie'> = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			position: 'top',
		},
	},
};
