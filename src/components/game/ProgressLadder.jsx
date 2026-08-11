import { StarIcon } from '../icons/index.js';

function getItemClasses(state) {
  if (state === 'current') {
    return 'flex items-center justify-between rounded-lg border border-gold-accent bg-gold-accent/20 px-md py-sm text-pure-white shadow-[0_0_15px_rgba(212,175,55,0.4)]';
  }
  if (state === 'completed') {
    return 'flex items-center justify-between rounded-lg border border-primary/20 bg-primary/10 px-md py-sm text-primary';
  }
  return 'flex items-center justify-between rounded-lg px-md py-sm text-on-surface-variant opacity-50';
}

export function ProgressLadder({ levelIndex, levels }) {
  return (
    <aside className="sticky top-[100px] hidden w-72 flex-col self-start rounded-2xl border border-white/5 bg-surface-container-low/90 p-md shadow-2xl backdrop-blur-xl md:flex">
      <h3 className="mb-md border-b border-white/10 pb-sm text-center font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
        Nivel de Conocimiento
      </h3>
      <ul className="flex flex-col-reverse gap-xs font-body-md text-body-md">
        {levels.map((level, index) => {
          const state = index === levelIndex ? 'current' : index < levelIndex ? 'completed' : 'upcoming';
          return (
            <li key={index} className={getItemClasses(state)}>
              <span className="font-bold">{index + 1}</span>
              <span className={`truncate px-xs ${state === 'current' ? 'font-semibold' : ''}`} title={level.category}>
                {level.category}
              </span>
              {state === 'current' && <StarIcon className="ml-xs h-4 w-4 shrink-0 text-gold-accent" />}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
