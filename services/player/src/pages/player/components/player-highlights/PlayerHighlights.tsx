import { useEffect, useState, useMemo } from 'react';

import { Loader, AlertMessage } from '@packages/shared/ui-kit';

import { fetchVideo } from '../../../../data/api/teamsApi';

interface PlayerHighlightsProps {
	playerName: string;
}

const PlayerHighlights = ({ playerName }: PlayerHighlightsProps) => {
	interface VideoData {
		videoId: string;
		title: string;
	}

	const [videoParams, setVideoParams] = useState<VideoData | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const videoData = await fetchVideo({ query: `${playerName} highlights` });
				setVideoParams(videoData);
			} catch (err) {
				setError('Failed to load video highlights. Please try again later.');
			}
		};

		fetchData();
	}, [playerName]);

	const videoUrl = useMemo(() => {
		return videoParams ? `https://www.youtube.com/embed/${videoParams.videoId}` : '';
	}, [videoParams]);

	if (error) {
		return <AlertMessage title="🚫 Error loading highlights" variant="danger" />;
	}

	if (!videoParams) {
		return <Loader />;
	}

	return (
		<div className="player-highlights">
			<h2 className="player-highlights-title">{videoParams.title}</h2>
			<div className="video-container">
				<iframe
					width="560"
					height="315"
					src={videoUrl}
					title={`Video about ${playerName}`}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
		</div>
	);
};

export default PlayerHighlights;
