import { ScoreLevelBar } from '../components/game/ScoreLevelBar.jsx';
import { LifelinesBar } from '../components/game/LifelinesBar.jsx';
import { QuestionCard } from '../components/game/QuestionCard.jsx';
import { AnswersGrid } from '../components/game/AnswersGrid.jsx';
import { ProgressLadder } from '../components/game/ProgressLadder.jsx';
import { ProgressBar } from '../components/game/ProgressBar.jsx';
import { GameOverModal } from '../components/game/GameOverModal.jsx';
import { HintModal } from '../components/game/HintModal.jsx';
import { LEVELS } from '../data/levels.js';

export function GameScreen({ gameState, onViewRanking }) {
  const { state, selectAnswer, useFiftyFifty, useBookHint, closeHint, useSkip, playAgain } = gameState;
  const level = LEVELS[state.levelIndex];

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col gap-lg px-container-margin pb-[100px] pt-[80px] md:flex-row">
      <section className="relative z-10 mx-auto flex w-full max-w-[800px] flex-grow flex-col justify-center">
        <ScoreLevelBar score={state.score} levelIndex={state.levelIndex} />
        <LifelinesBar
          lifelines={state.lifelines}
          isAnswerRevealed={state.isAnswerRevealed}
          onFiftyFifty={useFiftyFifty}
          onBookHint={useBookHint}
          onSkip={useSkip}
        />
        <QuestionCard category={level.category} question={state.activeQuestion.question} />
        <AnswersGrid
          options={state.activeQuestion.options}
          correctIndex={state.activeQuestion.correctIndex}
          selectedOptionIndex={state.selectedOptionIndex}
          isAnswerRevealed={state.isAnswerRevealed}
          hiddenOptionIndices={state.hiddenOptionIndices}
          onSelect={selectAnswer}
        />
        <ProgressBar levelIndex={state.levelIndex} />
      </section>

      <ProgressLadder levelIndex={state.levelIndex} />

      <HintModal isOpen={state.isHintOpen} onClose={closeHint} hint={state.activeQuestion.hint} />
      <GameOverModal
        status={state.status}
        score={state.score}
        levelIndex={state.levelIndex}
        onPlayAgain={playAgain}
        onViewRanking={onViewRanking}
      />
    </main>
  );
}
