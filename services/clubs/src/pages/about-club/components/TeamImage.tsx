import { placeholderImage } from '../../constants';

import type { TeamImageComponentProps } from './types';

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
