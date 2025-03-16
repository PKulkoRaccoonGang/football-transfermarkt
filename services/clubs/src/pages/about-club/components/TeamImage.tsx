import { placeholderImage } from '../../constants';

type TeamImageComponentProps = {
	imageSrc?: string;
	teamName: string;
	onError?: React.ReactEventHandler<HTMLImageElement>;
};

const TeamImage: React.FC<TeamImageComponentProps> = ({ imageSrc, teamName, onError }) => {
	return (
		<div className="image-container">
			<img
				src={imageSrc || placeholderImage}
				onError={onError}
				alt={teamName}
				className="club-image img-fluid rounded"
			/>
		</div>
	);
};

export default TeamImage;
