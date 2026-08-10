import { Modal } from '../shared/Modal.jsx';
import { MenuBookIcon } from '../icons/index.js';

export function HintModal({ isOpen, onClose, hint }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="hint-modal-title">
      <div className="text-center">
        <MenuBookIcon className="mx-auto mb-sm h-10 w-10 text-gold-accent" />
        <h2 id="hint-modal-title" className="font-title-md text-title-md text-pure-white">
          Consultando el libro
        </h2>
        <p className="mt-sm font-body-md text-body-md text-on-surface-variant">{hint}</p>
      </div>
    </Modal>
  );
}
