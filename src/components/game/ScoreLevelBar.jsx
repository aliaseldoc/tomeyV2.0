import { StarIcon } from '../icons/index.js';
import { formatScore } from '../../utils/formatScore.js';

export function ScoreLevelBar({ score, levelIndex, totalLevels }) {
  return (
    <div className="mb-sm flex items-center justify-between rounded-full border border-white/5 bg-surface-container/80 px-md py-xs">
      <div className="flex items-center gap-xs text-gold-accent">
        <StarIcon className="h-4 w-4" />
        <span className="font-label-caps text-label-caps font-bold">{formatScore(score)} Pts</span>
      </div>
      <div className="font-label-caps text-label-caps font-bold text-on-surface-variant">
        Pregunta {levelIndex + 1}/{totalLevels}
      </div>
    </div>
  );
}
