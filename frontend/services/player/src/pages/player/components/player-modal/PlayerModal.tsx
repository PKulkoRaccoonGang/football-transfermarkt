import { Button, Modal } from 'react-bootstrap';

import type { PlayerModalProps } from './types';

import { ButtonLink } from '@packages/shared/src/components/button-link';

const PlayerModal: React.FC<PlayerModalProps> = ({
	showModal,
	handleCloseModal,
	modalType,
	player,
	handleConfirmAction,
}) => {
	return (
		<Modal show={showModal} onHide={handleCloseModal} centered>
			<Modal.Header closeButton>
				<Modal.Title>{modalType === 'buy' ? 'Confirm Purchase' : 'Confirm Sale'}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{modalType === 'buy' ? (
					<>
						Are you sure you want to <strong>buy</strong> {player.name} for {player.price}?
					</>
				) : (
					<>
						Are you sure you want to <strong>sell</strong> {player.name}?
					</>
				)}
			</Modal.Body>
			<Modal.Footer>
				<ButtonLink title="Cancel" variant="danger" type="button" onClick={handleCloseModal} />
				<ButtonLink
					title={modalType === 'buy' ? 'Confirm Purchase' : 'Confirm Sale'}
					variant={modalType === 'buy' ? 'success' : 'danger'}
					type="button"
					onClick={handleConfirmAction}
				/>
			</Modal.Footer>
		</Modal>
	);
};

export default PlayerModal;
