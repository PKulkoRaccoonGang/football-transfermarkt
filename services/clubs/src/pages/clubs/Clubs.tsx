import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";

import { placeholderImage } from '../constants';
import clubs from "./__mocks__/clubs";

const Clubs = () => {
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.src = placeholderImage;
    };

    return (
        <div className="clubs-container">
            <Row>
                {clubs.map((club) => (
                    <Col md={4} sm={6} xs={12} key={club.id} className="mb-4">
                        <Card className="club-card h-100 shadow-lg">
                            <div className="image-container">
                                <Card.Img
                                    variant="top"
                                    src={club.image || placeholderImage}
                                    onError={handleImageError}
                                    alt={club.name}
                                    className="club-image"
                                />
                            </div>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="club-title">{club.name}</Card.Title>
                                <Card.Text className="club-description">
                                    {club.description}
                                </Card.Text>
                                <Link className="mt-auto custom-button" to={`/clubs/${club.id}`}>
                                    <span className="ball-icon">⚽</span> View Club
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Clubs;
