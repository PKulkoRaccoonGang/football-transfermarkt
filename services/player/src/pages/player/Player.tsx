import { useState } from 'react';
import { Image, Row, Col, Alert } from 'react-bootstrap';

import { PlayerModal, PlayerStats, PlayerDetails, PlayerActions } from './components';
import player from './__mocks__/player';
import { useConfetti } from './hooks';

const Player = () => {
	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState<'buy' | 'sell' | null>(null);
	const [notification, setNotification] = useState<string | null>(null);
	const { canvasRef, triggerConfetti } = useConfetti();

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
		} else if (modalType === 'sell') {
			setNotification(`${player.name} sold successfully!`);
		}
		setTimeout(() => setNotification(null), 5000);
		setShowModal(false);
	};

	return (
		<>
			<canvas ref={canvasRef} className="player-confetti" />
			{notification && (
				<Alert className="player-alert" variant="success">
					{notification}
				</Alert>
			)}

			<div className="player-container">
				<Row className="align-items-center">
					<Col md={4} className="text-center">
						<Image src={player.image} alt={player.name} fluid className="player-image" />
					</Col>
					<Col md={8}>
						<PlayerDetails playerData={player} />
					</Col>
				</Row>
				<Row className="mt-5">
					<Col>
						<PlayerStats />
					</Col>
				</Row>
				<Row className="mt-5">
					<Col className="text-center">
						<PlayerActions handleBuyPlayer={handleBuyPlayer} handleSellPlayer={handleSellPlayer} />
					</Col>
				</Row>

				<PlayerModal
					showModal={showModal}
					handleCloseModal={handleCloseModal}
					modalType={modalType}
					player={player}
					handleConfirmAction={handleConfirmAction}
				/>
			</div>
		</>
	);
};

export default Player;
