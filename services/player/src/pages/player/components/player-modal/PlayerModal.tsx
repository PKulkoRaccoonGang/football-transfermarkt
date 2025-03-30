import { Modal } from 'react-bootstrap';

import { ButtonLink } from '@packages/shared/ui-kit';

import type { PlayerModalProps } from './types';

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
						Are you sure you want to <strong>buy</strong> {player.firstName} {player.lastName} for{' '}
						<strong>{player.marketValue}</strong>?
					</>
				) : (
					<>
						Are you sure you want to <strong>sell</strong> {player.firstName} {player.lastName}?
					</>
				)}
			</Modal.Body>
			<Modal.Footer>
				<ButtonLink variant="danger" type="button" onClick={handleCloseModal}>
					Cancel
				</ButtonLink>
				<ButtonLink variant={modalType === 'buy' ? 'success' : 'danger'} type="button" onClick={handleConfirmAction}>
					{modalType === 'buy' ? 'Confirm Purchase' : 'Confirm Sale'}
				</ButtonLink>
			</Modal.Footer>
		</Modal>
	);
};

export default PlayerModal;
