import { Image, Container, Row, Col } from 'react-bootstrap';
import {Button} from "@packages/shared/src/components/Button";

import { PlayerStats } from './PlayerStats';
import { PlayerParams } from './PlayerParams';

export const App = () => {
    return (
        <>
            <Button />
            <h1 className="text-center my-4">Player Module</h1>
            <Container className="mt-5">
                <Row>
                    <Col md={4}>
                        <Image
                            src="https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45843.png&w=350&h=254"
                            roundedCircle
                            alt="Lionel Messi"
                            fluid
                        />
                    </Col>
                    <PlayerParams />
                </Row>
                <PlayerStats />
            </Container>
        </>
    );
};

