import { ArrowForwardIcon, LockIcon } from '../icons/index.js';
import { formatDate } from '../../utils/formatDate.js';

export function NivelCard({ nivel, isUnlocked, onSelect }) {
  const unlockMessage = nivel.unlockDate ? `Disponible a partir del ${formatDate(nivel.unlockDate)}` : 'Próximamente';

  return (
    <button
      type="button"
      disabled={!isUnlocked}
      onClick={onSelect}
      className={`group flex w-full items-center gap-md rounded-xl p-md text-left shadow-lg transition-all duration-300 disabled:cursor-not-allowed ${
        isUnlocked ? 'glass-panel glow-hover' : 'glass-panel opacity-40'
      }`}
    >
      <div className="flex-grow">
        <h3 className="font-title-md text-title-md text-pure-white">{nivel.title}</h3>
        <p className="mt-xs font-body-md text-body-md text-on-surface-variant">{nivel.description}</p>
        {!isUnlocked && (
          <p className="mt-sm font-label-caps text-label-caps uppercase tracking-widest text-gold-accent">
            {unlockMessage}
          </p>
        )}
      </div>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-container-highest text-primary">
        {isUnlocked ? (
          <ArrowForwardIcon className="h-5 w-5" />
        ) : (
          <LockIcon className="h-5 w-5 text-on-surface-variant" />
        )}
      </span>
    </button>
  );
}
