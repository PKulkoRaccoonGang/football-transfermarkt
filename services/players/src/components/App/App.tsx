import { Outlet } from "react-router-dom";
import { deepMerge } from '@packages/shared/src/utils/deepMerge'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { UserCard } from "@packages/shared/src/components/UserCard";

const players = [
    {
        name: "Lionel Messi",
        image: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45843.png&w=350&h=254",
        position: "Forward",
        team: "Inter Miami CF",
        nationality: "Argentina",
        description: "Widely regarded as one of the greatest football players of all time, Messi has won numerous Ballon d'Or awards and led Argentina to the 2022 FIFA World Cup victory."
    },
    {
        name: "Cristiano Ronaldo",
        image: "https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1",
        position: "Forward",
        team: "Al Nassr",
        nationality: "Portugal",
        description: "Cristiano Ronaldo is known for his incredible goal-scoring ability and has won 5 Ballon d'Or awards. He has set numerous records throughout his career."
    },
    {
        name: "Neymar Jr.",
        image: "https://img.a.transfermarkt.technology/portrait/big/68290-1697056482.png?lm=1",
        position: "Forward",
        team: "Al Hilal",
        nationality: "Brazil",
        description: "Neymar is one of Brazil's top players, known for his flair and creativity on the ball. He has played for top clubs such as Barcelona and PSG."
    },
    {
        name: "Kylian Mbappe",
        image: "https://imageio.forbes.com/specials-images/imageserve/626c7cf3616c1112ae834a2b/0x0.jpg?format=jpg&crop=1603,1603,x1533,y577,safe&height=416&width=416&fit=bounds",
        position: "Forward",
        team: "Paris Saint-Germain",
        nationality: "France",
        description: "One of the fastest players in the world, Kylian Mbappe has already won numerous titles at a young age, including the FIFA World Cup in 2018."
    },
    {
        name: "Robert Lewandowski",
        image: "https://www.fcbarcelona.com/photo-resources/2023/10/04/22dd0d30-d58f-448c-a51e-47d44c894d16/mini_09-ROBERT_LEWANDOWSKI.png?width=670&height=790",
        position: "Forward",
        team: "FC Barcelona",
        nationality: "Poland",
        description: "Robert Lewandowski is known for his incredible goal-scoring ability, having won multiple Golden Boot awards across Europe."
    },
    {
        name: "Kevin De Bruyne",
        image: "https://i.guim.co.uk/img/media/01c05df5056db157614716ef2ee528b9650281e0/0_375_3834_4562/master/3834.jpg?width=445&dpr=1&s=none",
        position: "Midfielder",
        team: "Manchester City",
        nationality: "Belgium",
        description: "A world-class playmaker, Kevin De Bruyne is renowned for his vision and passing ability, consistently providing assists and scoring goals for his team."
    },
    {
        name: "Mohamed Salah",
        image: "https://img.a.transfermarkt.technology/portrait/big/148455-1727337594.jpg?lm=1",
        position: "Forward",
        team: "Liverpool",
        nationality: "Egypt",
        description: "Mohamed Salah is known for his pace, finishing, and dribbling skills, helping Liverpool win both the Premier League and the UEFA Champions League."
    },
    {
        name: "Virgil van Dijk",
        image: "https://b.fssta.com/uploads/application/soccer/headshots/3575.vresize.350.350.medium.89.png",
        position: "Defender",
        team: "Liverpool",
        nationality: "Netherlands",
        description: "Virgil van Dijk is widely regarded as one of the best defenders in the world, known for his leadership, strength, and tactical awareness."
    },
    {
        name: "Sergio Ramos",
        image: "https://b.fssta.com/uploads/application/soccer/headshots/884.png",
        position: "Defender",
        team: "Sevilla",
        nationality: "Spain",
        description: "Sergio Ramos is a legendary defender, known for his aggressive style of play, leadership, and ability to score crucial goals in big matches."
    }
];

const placeholderImage = "https://via.placeholder.com/300";

export const App = () => {
    deepMerge();

    const handleImageError = (event: { target: { src: string; }; }) => {
        event.target.src = placeholderImage;
    };

    return (
        <>
            <h1 className="text-center my-4">Player Cards</h1>
            <Container className="mt-5">
                <Row>
                    {players.map((player, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card className="h-100 d-flex flex-column">
                                <div style={{ height: '300px', overflow: 'hidden' }}>
                                    <Card.Img
                                        variant="top"
                                        src={player.image || placeholderImage}
                                        onError={handleImageError}
                                        alt={player.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{player.name}</Card.Title>
                                    <div className="mt-auto">
                                        <Button variant="primary" className="me-2">View Profile</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

