import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Row, Col, Alert } from 'react-bootstrap';

import { Loader, AlertMessage } from '@packages/shared/ui-kit';

import { usePlayer } from '../../data/hooks/usePlayer';
import type { Player as PlayerTypes } from '../../types';
import { PlayerModal, PlayerDetails, PlayerActions, PlayerHighlights, PlayerStatsChart } from './components';
import { useConfetti } from './hooks';

const Player = () => {
	const { id } = useParams();
	const playerId = Number.isNaN(Number(id)) ? null : Number.parseInt(id, 10);
	const { data, isLoading, isError } = usePlayer(playerId);

	const playerDetails = data && typeof data === 'object' ? (data as PlayerTypes) : null;

	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState<'buy' | 'sell' | null>(null);
	const [notification, setNotification] = useState<string | null>(null);
	const { canvasRef, triggerConfetti } = useConfetti();

	if (isLoading) {
		return <Loader />;
	}

	if (isError || !playerDetails) {
		return (
			<AlertMessage
				title="🚫 Player not found."
				linkTitle="Back to Teams"
				hasLink
				variant="danger"
				destination="/clubs"
			/>
		);
	}

	const handleAction = (type: 'buy' | 'sell') => {
		setModalType(type);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setModalType(null);
	};

	const handleConfirmAction = () => {
		if (modalType === 'buy') {
			triggerConfetti();
			setNotification(`${playerDetails.firstName} ${playerDetails.lastName} purchased successfully!`);
		} else if (modalType === 'sell') {
			setNotification(`${playerDetails.firstName} ${playerDetails.lastName} sold successfully!`);
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
						<Image
							src={playerDetails.photo ?? ''}
							alt={`${playerDetails.firstName ?? ''} ${playerDetails.lastName ?? ''}`}
							fluid
							className="player-image"
						/>
					</Col>
					<Col md={8}>
						<PlayerDetails playerData={playerDetails} />
					</Col>
				</Row>
				<Row className="mt-5">
					<Col>
						<PlayerStatsChart stats={playerDetails} />
					</Col>
				</Row>

				<Row className="mt-5">
					<Col>
						<PlayerHighlights playerName={`${playerDetails.firstName ?? ''} ${playerDetails.lastName ?? ''}`} />
					</Col>
				</Row>

				<Row className="mt-5">
					<Col className="text-center">
						<PlayerActions handleBuyPlayer={() => handleAction('buy')} handleSellPlayer={() => handleAction('sell')} />
					</Col>
				</Row>

				<PlayerModal
					showModal={showModal}
					handleCloseModal={handleCloseModal}
					modalType={modalType}
					player={playerDetails}
					handleConfirmAction={handleConfirmAction}
				/>
			</div>
		</>
	);
};

export default Player;
