import { useState, useEffect, useRef } from 'react';
import { Image, Container, Row, Col, ListGroup, Button, Modal, Alert } from 'react-bootstrap';

const Player = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<'buy' | 'sell' | null>(null);
    const [showConfetti, setShowConfetti] = useState(false);
    const [notification, setNotification] = useState<string | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const player = {
        name: "Lionel Messi",
        position: "Forward",
        team: "Inter Miami CF",
        age: 36,
        nationality: "Argentina",
        flagCode: "ar",
        price: "$150M",
        wikipediaLink: "https://en.wikipedia.org/wiki/Inter_Miami_CF",
        image: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45843.png&w=350&h=254",
    };

    const handleBuyPlayer = () => {
        setModalType('buy');
        setShowModal(true);
    };

    const handleSellPlayer = () => {
        setModalType('sell');
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setModalType(null);
    };

    const handleConfirmAction = () => {
        if (modalType === 'buy') {
            triggerConfetti();
            setNotification(`${player.name} purchased successfully for ${player.price}!`);
            setTimeout(() => setNotification(null), 5000); // Нотифікація зникає через 5 секунд
        } else if (modalType === 'sell') {
            setNotification(`${player.name} sold successfully!`);
            setTimeout(() => setNotification(null), 5000);
        }
        setShowModal(false);
    };

    const triggerConfetti = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FFC733'];
        const confetti = Array.from({ length: 100 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 5 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            velocityY: Math.random() * 3 + 2,
            velocityX: (Math.random() - 0.5) * 3,
        }));

        const render = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            confetti.forEach((particle) => {
                particle.x += particle.velocityX;
                particle.y += particle.velocityY;

                if (particle.y > canvas.height) {
                    particle.y = -particle.size;
                }

                ctx.fillStyle = particle.color;
                ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
            });

            requestAnimationFrame(render);
        };

        render();

        setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, 5000);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }, []);

    return (
        <>
            {/* Canvas для конфетті */}
            <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000, pointerEvents: 'none' }}></canvas>

            {notification && (
                <Alert
                    variant="success"
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        zIndex: 2000,
                        minWidth: '300px',
                        textAlign: 'center',
                    }}
                >
                    {notification}
                </Alert>
            )}

            <Container className="player-container mt-5 p-4 rounded shadow-lg">
                <Row className="align-items-center">
                    <Col md={4} className="text-center">
                        <Image
                            src={player.image}
                            alt={player.name}
                            fluid
                            className="player-image"
                        />
                    </Col>
                    <Col md={8}>
                        <h2 className="player-name">{player.name}</h2>
                        <p><strong>Position:</strong> {player.position}</p>
                        <p>
                            <strong>Team:</strong>{' '}
                            <a
                                href={player.wikipediaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="team-link"
                            >
                                {player.team}
                            </a>
                        </p>
                        <p><strong>Age:</strong> {player.age}</p>
                        <p>
                            <strong>Nationality:</strong>{' '}
                            <img
                                src={`https://flagcdn.com/w40/${player.flagCode}.png`}
                                alt={player.nationality}
                                style={{
                                    width: '20px',
                                    height: '15px',
                                    marginRight: '10px',
                                }}
                            />
                            {player.nationality}
                        </p>
                        <p><strong>Price:</strong> {player.price}</p>
                        <p className="player-description">
                            Lionel Messi is widely regarded as one of the greatest football players of all time.
                            He has won numerous Ballon d'Or awards and has led both club and country to multiple
                            championships, including the 2022 FIFA World Cup with Argentina. Known for his incredible
                            dribbling, vision, and playmaking abilities, Messi is a global icon in football.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <h3 className="stats-title">Player Stats</h3>
                        <ListGroup className="player-stats">
                            <ListGroup.Item><strong>Matches Played:</strong> 1000+</ListGroup.Item>
                            <ListGroup.Item><strong>Goals Scored:</strong> 800+</ListGroup.Item>
                            <ListGroup.Item><strong>Assists:</strong> 350+</ListGroup.Item>
                            <ListGroup.Item><strong>Ballon d'Ors:</strong> 7</ListGroup.Item>
                            <ListGroup.Item><strong>FIFA World Cup:</strong> 1 (2022)</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="text-center">
                        <Button
                            variant="success"
                            className="player-action-button mx-2"
                            onClick={handleBuyPlayer}
                        >
                            Buy a player
                        </Button>
                        <Button
                            variant="danger"
                            className="player-action-button mx-2"
                            onClick={handleSellPlayer}
                        >
                            Sell a player
                        </Button>
                    </Col>
                </Row>

                {/* Модальне вікно */}
                <Modal show={showModal} onHide={handleCloseModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {modalType === 'buy' ? 'Confirm Purchase' : 'Confirm Sale'}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {modalType === 'buy' ? (
                            <>Are you sure you want to <strong>buy</strong> {player.name} for {player.price}?</>
                        ) : (
                            <>Are you sure you want to <strong>sell</strong> {player.name}?</>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Cancel
                        </Button>
                        <Button
                            variant={modalType === 'buy' ? 'success' : 'danger'}
                            onClick={handleConfirmAction}
                        >
                            {modalType === 'buy' ? 'Confirm Purchase' : 'Confirm Sale'}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    );
};

export default Player;
