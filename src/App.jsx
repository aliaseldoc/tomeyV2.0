import { useEffect, useState } from 'react';
import { TopAppBar } from './components/layout/TopAppBar.jsx';
import { BottomNav } from './components/layout/BottomNav.jsx';
import { ConfirmModal } from './components/shared/ConfirmModal.jsx';
import { WelcomeScreen } from './screens/WelcomeScreen.jsx';
import { GameScreen } from './screens/GameScreen.jsx';
import { RankingScreen } from './screens/RankingScreen.jsx';
import { useGameState } from './hooks/useGameState.js';
import { useLeaderboard } from './hooks/useLeaderboard.js';
import { LEVELS } from './data/levels.js';

export default function App() {
  const [view, setView] = useState('welcome');
  const [isQuitConfirmOpen, setIsQuitConfirmOpen] = useState(false);
  const [pendingView, setPendingView] = useState(null);
  const gameState = useGameState();
  const leaderboard = useLeaderboard();

  useEffect(() => {
    const { status, playerName, score, levelIndex } = gameState.state;
    if (status !== 'won' && status !== 'lost') return;
    leaderboard.addEntry({
      name: playerName,
      score,
      levelReached: status === 'won' ? LEVELS.length : levelIndex + 1,
    });
    // Solo depende del status: cada nueva partida pasa antes por 'playing'
    // (START_RUN/PLAY_AGAIN), así que esto se dispara una única vez por resultado.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.state.status]);

  function handleStart(name) {
    gameState.startRun(name);
    setView('game');
  }

  function handleNavigate(nextView) {
    const isMidRun = gameState.state.status === 'playing';
    if (isMidRun && nextView !== 'game') {
      setPendingView(nextView);
      setIsQuitConfirmOpen(true);
      return;
    }
    setView(nextView);
  }

  function handleConfirmQuit() {
    gameState.quitRun();
    setView(pendingView ?? 'welcome');
    setPendingView(null);
  }

  return (
    <>
      {view !== 'welcome' && <TopAppBar playerName={gameState.state.playerName} />}

      {view === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      {view === 'game' && <GameScreen gameState={gameState} onViewRanking={() => setView('ranking')} />}
      {view === 'ranking' && <RankingScreen entries={leaderboard.entries} />}

      {view !== 'welcome' && <BottomNav activeView={view} onNavigate={handleNavigate} />}

      <ConfirmModal
        isOpen={isQuitConfirmOpen}
        onClose={() => setIsQuitConfirmOpen(false)}
        onConfirm={handleConfirmQuit}
        title="¿Abandonar la partida?"
        message="Vas a perder el progreso de este intento. Tu puntaje actual no se va a guardar en el ranking."
        confirmLabel="Sí, abandonar"
        cancelLabel="Seguir jugando"
      />
    </>
  );
}
