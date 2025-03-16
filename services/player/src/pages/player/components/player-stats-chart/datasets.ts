import type { ChartData } from 'chart.js';

import type { PlayerStats } from './types';

/**
 * Generates the data for a bar chart displaying percentage-based statistics.
 *
 * @param {PlayerStats} stats - The player's statistics containing percentage values.
 * @returns {ChartData<"bar">} The formatted chart data for the bar chart.
 */
export const getPercentageData = (stats: PlayerStats): ChartData<'bar'> => ({
	labels: ['Pass Accuracy (%)', 'Dribble Success (%)', 'Shot Accuracy (%)', 'Tackle Success (%)'],
	datasets: [
		{
			label: 'Percentage Statistics',
			data: [stats.passAccuracy, stats.dribbleSuccess, stats.shotAccuracy, stats.tackleSuccess],
			backgroundColor: [
				'rgba(75, 192, 192, 0.6)',
				'rgba(54, 162, 235, 0.6)',
				'rgba(255, 206, 86, 0.6)',
				'rgba(153, 102, 255, 0.6)',
			],
			borderColor: [
				'rgba(75, 192, 192, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(153, 102, 255, 1)',
			],
			borderWidth: 1,
		},
	],
});

/**
 * Generates the data for a line chart displaying integer-based statistics.
 *
 * @param {PlayerStats} stats - The player's statistics containing integer values.
 * @returns {ChartData<"line">} The formatted chart data for the line chart.
 */
export const getIntegerData = (stats: PlayerStats): ChartData<'line'> => ({
	labels: ['Goals Scored', 'Assists', 'Shots on Target', 'Tackles'],
	datasets: [
		{
			label: 'Integer Statistics',
			data: [stats.goalsScored, stats.assists, stats.shotsOnTarget, stats.tackles],
			borderColor: 'rgba(54, 162, 235, 1)',
			backgroundColor: 'rgba(54, 162, 235, 0.4)',
			borderWidth: 2,
			tension: 0.4,
		},
	],
});

/**
 * Generates the data for a pie chart displaying card-related statistics.
 *
 * @param {PlayerStats} stats - The player's statistics containing card data.
 * @returns {ChartData<"pie">} The formatted chart data for the pie chart.
 */
export const getCardsData = (stats: PlayerStats): ChartData<'pie'> => ({
	labels: ['Yellow Cards', 'Red Cards'],
	datasets: [
		{
			label: 'Cards Statistics',
			data: [stats.yellowCards, stats.redCards],
			backgroundColor: ['rgba(255, 206, 86, 0.6)', 'rgba(255, 99, 71, 0.6)'],
			hoverBackgroundColor: ['rgba(255, 206, 86, 0.8)', 'rgba(255, 99, 71, 0.8)'],
			borderColor: ['rgba(255, 206, 86, 1)', 'rgba(255, 99, 71, 1)'],
			borderWidth: 1,
		},
	],
});
