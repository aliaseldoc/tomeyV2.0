import { Modal } from '../shared/Modal.jsx';
import { LEVELS } from '../../data/levels.js';
import { formatScore } from '../../utils/formatScore.js';
import { EmojiEventsIcon } from '../icons/index.js';

export function GameOverModal({ status, score, levelIndex, onPlayAgain, onViewRanking }) {
  const isOpen = status === 'won' || status === 'lost';
  const isWon = status === 'won';
  const levelReached = isWon ? LEVELS.length : levelIndex + 1;

  return (
    <Modal isOpen={isOpen} onClose={() => {}} dismissible={false} labelledBy="game-over-title">
      <div className="text-center">
        <EmojiEventsIcon className={`mx-auto mb-sm h-14 w-14 ${isWon ? 'text-gold-accent' : 'text-on-surface-variant'}`} />
        <h2 id="game-over-title" className="font-headline-lg text-headline-lg text-pure-white">
          {isWon ? '¡Felicitaciones!' : '¡Partida terminada!'}
        </h2>
        <p className="mt-xs font-body-md text-body-md text-on-surface-variant">
          {isWon
            ? 'Completaste los 15 niveles del Desafío de Tomey.'
            : `Llegaste al nivel ${levelReached} de ${LEVELS.length}.`}
        </p>
        <p className="mt-md font-headline-xl text-headline-xl text-gold-accent">{formatScore(score)}</p>
        <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">Puntos</p>
        <div className="mt-lg flex flex-col gap-sm">
          <button
            type="button"
            onClick={onPlayAgain}
            className="w-full rounded-xl bg-primary py-sm font-title-md text-title-md text-on-primary shadow-[0_0_20px_rgba(92,216,218,0.3)] transition-all hover:bg-primary-fixed-dim active:scale-95"
          >
            Jugar de nuevo
          </button>
          <button
            type="button"
            onClick={onViewRanking}
            className="w-full rounded-xl border border-pure-white/10 bg-surface-container-high py-sm font-title-md text-title-md text-on-surface transition-colors hover:bg-surface-container-highest"
          >
            Ver ranking
          </button>
        </div>
      </div>
    </Modal>
  );
}
