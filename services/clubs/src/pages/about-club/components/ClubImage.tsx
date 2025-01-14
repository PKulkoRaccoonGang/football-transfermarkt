import { placeholderImage } from '../../constants';

type ClubImageProps = {
	imageSrc?: string;
	clubName: string;
	onError?: React.ReactEventHandler<HTMLImageElement>;
};

const ClubImage: React.FC<ClubImageProps> = ({ imageSrc, clubName, onError }) => {
	return (
		<div className="image-container">
			<img
				src={imageSrc || placeholderImage}
				onError={onError}
				alt={clubName}
				className="club-image img-fluid rounded"
			/>
		</div>
	);
};

export default ClubImage;
