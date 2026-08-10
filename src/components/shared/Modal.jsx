import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '../icons/index.js';

export function Modal({ isOpen, onClose, dismissible = true, labelledBy, children }) {
  useEffect(() => {
    if (!isOpen || !dismissible) return;

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, dismissible, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-container-margin">
      <div
        className="absolute inset-0 bg-deep-navy/80 backdrop-blur-sm"
        onClick={dismissible ? onClose : undefined}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className="glass-panel relative w-full max-w-sm rounded-2xl p-lg shadow-2xl"
      >
        {dismissible && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-xs top-xs rounded-full p-base text-on-surface-variant transition-colors hover:bg-surface-container-highest hover:text-pure-white"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body,
  );
}
