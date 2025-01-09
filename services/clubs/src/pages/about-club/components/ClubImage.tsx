import { placeholderImage } from '../../constants';

const ClubImage = ({ imageSrc, clubName, onError }) => {
  return (
      <div className="image-container">
          <img
              src={imageSrc || placeholderImage}
              onError={onError}
              alt={clubName}
              className="club-image img-fluid rounded"
          />
      </div>
  )
};

export default ClubImage;