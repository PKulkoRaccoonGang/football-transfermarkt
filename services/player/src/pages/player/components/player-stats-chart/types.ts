import type { ReactNode } from 'react';

export type PlayerStats = {
	goalsScored: number;
	assists: number;
	shotsOnTarget: number;
	passAccuracy: number;
	dribbleSuccess: number;
	shotAccuracy: number;
	tackleSuccess: number;
	tackles: number;
	yellowCards: number;
	redCards: number;
};

export type PlayerStatsChartContainerProps = {
	chartTitle: string;
	className?: string;
	eventKey: string;
	children: ReactNode;
};
