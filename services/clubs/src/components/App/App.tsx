import { Outlet } from "react-router-dom";

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const clubs = [
    {
        name: "FC Barcelona",
        image: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
        description: "One of the top clubs in Europe, known for its attacking style and producing world-class players like Lionel Messi."
    },
    {
        name: "Real Madrid",
        image: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
        description: "One of the most successful clubs in history, with 14 UEFA Champions League titles."
    },
    {
        name: "Manchester United",
        image: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
        description: "An iconic English club with a rich history of domestic and international success."
    },
    {
        name: "Liverpool FC",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
        description: "Known for its passionate fans and success in both the Premier League and UEFA Champions League."
    },
    {
        name: "Bayern Munich",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
        description: "The dominant team in Germany with a long history of domestic and European trophies."
    },
    {
        name: "Paris Saint-Germain",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/800px-Paris_Saint-Germain_F.C..svg.png",
        description: "The top club in France, known for its star-studded lineup and dominance in Ligue 1."
    },
    {
        name: "Juventus FC",
        image: "https://upload.wikimedia.org/wikinews/en/d/d2/Juventus_Turin.svg",
        description: "Italy's most successful club, famous for its defensive strength and domestic success."
    },
    {
        name: "AC Milan",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1306px-Logo_of_AC_Milan.svg.png",
        description: "One of the most successful Italian clubs, known for its history in European competitions."
    },
    {
        name: "Chelsea FC",
        image: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
        description: "One of England's top clubs, with multiple Premier League and Champions League titles."
    }
];

const placeholderImage = "https://via.placeholder.com/300";

export const App = () => {
    const handleImageError = (event: { target: { src: string; }; }) => {
        event.target.src = placeholderImage;
    };

    return (
        <div>
            <h1 className="text-center my-4">Football Clubs</h1>
            <Container className="mt-5">
                <Row>
                    {clubs.map((club, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card className="h-100 d-flex flex-column">
                                <div style={{ height: '300px', overflow: 'hidden' }}>
                                    <Card.Img
                                        variant="top"
                                        src={club.image || placeholderImage}
                                        onError={handleImageError}
                                        alt={club.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{club.name}</Card.Title>
                                    <Card.Text>{club.description}</Card.Text>
                                    <div className="mt-auto">
                                        <Button variant="primary" className="me-2">View Club</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

