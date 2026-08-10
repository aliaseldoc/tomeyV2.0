import { Modal } from './Modal.jsx';

export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
}) {
  function handleConfirm() {
    onClose();
    onConfirm();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="confirm-modal-title">
      <h2 id="confirm-modal-title" className="font-title-md text-title-md text-pure-white mb-sm">
        {title}
      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-lg">{message}</p>
      <div className="flex gap-sm">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 rounded-xl border border-pure-white/10 bg-surface-container-high py-sm font-title-md text-body-md text-on-surface transition-colors hover:bg-surface-container-highest"
        >
          {cancelLabel}
        </button>
        <button
          type="button"
          onClick={handleConfirm}
          className="flex-1 rounded-xl bg-danger-red py-sm font-title-md text-body-md text-pure-white transition-colors hover:brightness-110"
        >
          {confirmLabel}
        </button>
      </div>
    </Modal>
  );
}
