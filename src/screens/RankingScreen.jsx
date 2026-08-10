import { LeaderboardList } from '../components/ranking/LeaderboardList.jsx';

export function RankingScreen({ entries }) {
  return (
    <main className="mx-auto w-full max-w-[800px] flex-grow px-container-margin pb-[100px] pt-[100px]">
      <div className="mb-lg text-center">
        <h2 className="mb-xs font-headline-xl text-headline-xl text-gold-accent">Top 20 Excelencia</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Líderes en desarrollo profesional de enfermería
        </p>
      </div>
      <LeaderboardList entries={entries} />
    </main>
  );
}
