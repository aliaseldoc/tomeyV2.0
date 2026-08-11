import { HomeIcon, QuizIcon, LeaderboardIcon } from '../icons/index.js';

const TABS = [
  { key: 'nivel-select', label: 'Inicio', Icon: HomeIcon },
  { key: 'game', label: 'Desafío', Icon: QuizIcon },
  { key: 'ranking', label: 'Ranking', Icon: LeaderboardIcon },
];

const activeClasses =
  'flex -translate-y-2 transform flex-col items-center justify-center rounded-xl border border-primary/30 bg-surface px-md py-sm text-primary shadow-[0_0_15px_rgba(92,216,218,0.2)] transition-all duration-200 active:scale-90';
const inactiveClasses =
  'flex flex-col items-center justify-center py-xs text-on-surface-variant opacity-70 transition-all duration-200 hover:text-primary active:scale-90';

export function BottomNav({ activeView, onNavigate }) {
  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t border-pure-white/10 bg-surface-container-lowest/95 px-sm pb-base pt-xs shadow-[0_-4px_15px_rgba(0,0,0,0.5)] backdrop-blur-md">
      {TABS.map(({ key, label, Icon }) => {
        const isActive = activeView === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onNavigate(key)}
            className={isActive ? activeClasses : inactiveClasses}
          >
            <Icon filled={isActive} className="mb-1 h-6 w-6" />
            <span className={isActive ? 'font-label-caps text-label-caps font-bold' : 'font-label-caps text-label-caps'}>
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
