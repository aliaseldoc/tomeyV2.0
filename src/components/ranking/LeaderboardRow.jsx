import { EmojiEventsIcon, MilitaryTechIcon } from '../icons/index.js';
import { LEVELS } from '../../data/levels.js';
import { formatScore } from '../../utils/formatScore.js';

const MEDAL_CONFIG = {
  1: { Icon: EmojiEventsIcon, className: 'rank-gold', size: 'h-9 w-9' },
  2: { Icon: MilitaryTechIcon, className: 'rank-silver', size: 'h-8 w-8' },
  3: { Icon: MilitaryTechIcon, className: 'rank-bronze', size: 'h-7 w-7' },
};

export function LeaderboardRow({ rank, entry }) {
  const medal = MEDAL_CONFIG[rank];

  if (medal) {
    const MedalIcon = medal.Icon;
    return (
      <div className="glass-panel flex items-center gap-sm rounded-lg p-md shadow-lg">
        <div className="mr-md flex h-12 w-12 shrink-0 items-center justify-center">
          <MedalIcon className={`${medal.size} ${medal.className}`} />
        </div>
        <div className="flex-grow overflow-hidden">
          <h3 className="truncate font-title-md text-title-md text-pure-white">{entry.name}</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Nivel {entry.levelReached}/{LEVELS.length}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <span className="block font-headline-lg text-headline-lg text-primary">{formatScore(entry.score)}</span>
          <span className="font-label-caps text-label-caps text-on-surface-variant">PTS</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-sm rounded-lg border border-pure-white/5 bg-surface-container-low p-md transition-colors hover:bg-surface-container-highest">
      <div className="mr-md flex h-12 w-12 shrink-0 items-center justify-center">
        <span className="font-headline-lg text-headline-lg font-bold text-on-surface-variant">{rank}</span>
      </div>
      <div className="flex-grow overflow-hidden">
        <h3 className="truncate font-body-lg text-body-lg font-medium text-pure-white">{entry.name}</h3>
      </div>
      <div className="shrink-0 text-right">
        <span className="block font-title-md text-title-md text-primary">{formatScore(entry.score)}</span>
      </div>
    </div>
  );
}
