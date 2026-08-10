import { LifelineButton } from './LifelineButton.jsx';
import { MenuBookIcon, SkipNextIcon } from '../icons/index.js';

export function LifelinesBar({ lifelines, isAnswerRevealed, onFiftyFifty, onBookHint, onSkip }) {
  return (
    <div className="mb-lg flex justify-end gap-sm">
      <LifelineButton title="50:50" disabled={lifelines.fiftyFifty.used || isAnswerRevealed} onClick={onFiftyFifty}>
        <span className="font-label-caps text-label-caps font-bold">50:50</span>
      </LifelineButton>
      <LifelineButton title="Consultar el libro" disabled={lifelines.bookHint.used || isAnswerRevealed} onClick={onBookHint}>
        <MenuBookIcon className="h-5 w-5" />
      </LifelineButton>
      <LifelineButton title="Saltar" disabled={lifelines.skip.used || isAnswerRevealed} onClick={onSkip}>
        <SkipNextIcon className="h-5 w-5" />
      </LifelineButton>
    </div>
  );
}
