import { LEVELS } from '../../data/levels.js';

export function ProgressBar({ levelIndex }) {
  const progressPercent = ((levelIndex + 1) / LEVELS.length) * 100;
  return (
    <div className="mt-lg h-2 w-full overflow-hidden rounded-full bg-surface-container-high shadow-inner md:hidden">
      <div className="h-full bg-gradient-to-r from-primary to-gold-accent" style={{ width: `${progressPercent}%` }} />
    </div>
  );
}
