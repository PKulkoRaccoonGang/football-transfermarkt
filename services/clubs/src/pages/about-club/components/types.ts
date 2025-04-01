import type { Team } from '@/types';

export type TeamDetailsComponentProps = {
	team: Team;
};

export type TeamImageComponentProps = {
	imageSrc?: string;
	teamName: string;
	onError?: React.ReactEventHandler<HTMLImageElement>;
};

export type TeamPlayersComponentProps = {
	team: Team;
	onError?: React.ReactEventHandler<HTMLImageElement>;
};
