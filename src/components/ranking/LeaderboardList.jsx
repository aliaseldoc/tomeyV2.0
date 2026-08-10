import { LeaderboardRow } from './LeaderboardRow.jsx';

export function LeaderboardList({ entries }) {
  if (entries.length === 0) {
    return (
      <p className="mt-lg text-center font-body-md text-body-md text-on-surface-variant">
        Aún no hay puntuaciones registradas. ¡Sé el primero en completar el desafío!
      </p>
    );
  }

  return (
    <div className="space-y-sm">
      {entries.map((entry, index) => (
        <LeaderboardRow key={`${entry.name}-${entry.date}`} rank={index + 1} entry={entry} />
      ))}
    </div>
  );
}
