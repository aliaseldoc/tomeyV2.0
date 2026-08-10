import { useEffect, useReducer } from 'react';
import { LEVELS } from '../data/levels.js';
import { pickQuestionForLevel } from '../utils/pickQuestion.js';

const REVEAL_DELAY_MS = 1500;

const initialState = {
  status: 'idle', // 'idle' | 'playing' | 'won' | 'lost'
  playerName: '',
  levelIndex: 0,
  activeQuestion: null,
  selectedOptionIndex: null,
  isAnswerRevealed: false,
  hiddenOptionIndices: [],
  score: 0,
  lifelines: {
    fiftyFifty: { used: false },
    bookHint: { used: false },
    skip: { used: false },
  },
  isHintOpen: false,
};

function getBankedScoreOnFail(failedLevelIndex) {
  const passedCheckpoints = LEVELS.filter((level, index) => level.isCheckpoint && index < failedLevelIndex);
  return passedCheckpoints.length > 0 ? passedCheckpoints[passedCheckpoints.length - 1].points : 0;
}

function reducer(state, action) {
  switch (action.type) {
    case 'START_RUN':
      return {
        ...initialState,
        status: 'playing',
        playerName: action.payload.name,
        activeQuestion: action.payload.question,
      };
    case 'PLAY_AGAIN':
      return {
        ...initialState,
        status: 'playing',
        playerName: state.playerName,
        activeQuestion: action.payload.question,
      };
    case 'ANSWER':
      if (state.isAnswerRevealed) return state;
      return { ...state, selectedOptionIndex: action.payload.optionIndex, isAnswerRevealed: true };
    case 'ADVANCE_LEVEL':
      return {
        ...state,
        levelIndex: state.levelIndex + 1,
        score: LEVELS[state.levelIndex].points,
        activeQuestion: action.payload.question,
        selectedOptionIndex: null,
        isAnswerRevealed: false,
        hiddenOptionIndices: [],
      };
    case 'END_RUN':
      return {
        ...state,
        status: action.payload.result,
        score:
          action.payload.result === 'won' ? LEVELS[LEVELS.length - 1].points : getBankedScoreOnFail(state.levelIndex),
      };
    case 'USE_FIFTY_FIFTY':
      return {
        ...state,
        hiddenOptionIndices: action.payload.hiddenIndices,
        lifelines: { ...state.lifelines, fiftyFifty: { used: true } },
      };
    case 'USE_BOOK_HINT':
      return { ...state, isHintOpen: true, lifelines: { ...state.lifelines, bookHint: { used: true } } };
    case 'CLOSE_HINT':
      return { ...state, isHintOpen: false };
    case 'USE_SKIP':
      return {
        ...state,
        levelIndex: state.levelIndex + 1,
        score: LEVELS[state.levelIndex].points,
        activeQuestion: action.payload.question,
        selectedOptionIndex: null,
        isAnswerRevealed: false,
        hiddenOptionIndices: [],
        lifelines: { ...state.lifelines, skip: { used: true } },
      };
    case 'USE_SKIP_FINAL':
      return {
        ...state,
        status: 'won',
        score: LEVELS[LEVELS.length - 1].points,
        lifelines: { ...state.lifelines, skip: { used: true } },
      };
    case 'QUIT_RUN':
      return initialState;
    default:
      return state;
  }
}

export function useGameState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function startRun(name) {
    dispatch({ type: 'START_RUN', payload: { name, question: pickQuestionForLevel(0) } });
  }

  function playAgain() {
    dispatch({ type: 'PLAY_AGAIN', payload: { question: pickQuestionForLevel(0) } });
  }

  function selectAnswer(optionIndex) {
    dispatch({ type: 'ANSWER', payload: { optionIndex } });
  }

  function useFiftyFifty() {
    const { correctIndex, options } = state.activeQuestion;
    const wrongIndices = options.map((_, index) => index).filter((index) => index !== correctIndex);
    const hiddenIndices = [...wrongIndices].sort(() => Math.random() - 0.5).slice(0, 2);
    dispatch({ type: 'USE_FIFTY_FIFTY', payload: { hiddenIndices } });
  }

  function useBookHint() {
    dispatch({ type: 'USE_BOOK_HINT' });
  }

  function closeHint() {
    dispatch({ type: 'CLOSE_HINT' });
  }

  function useSkip() {
    const isLastLevel = state.levelIndex === LEVELS.length - 1;
    if (isLastLevel) {
      dispatch({ type: 'USE_SKIP_FINAL' });
    } else {
      dispatch({ type: 'USE_SKIP', payload: { question: pickQuestionForLevel(state.levelIndex + 1) } });
    }
  }

  function quitRun() {
    dispatch({ type: 'QUIT_RUN' });
  }

  useEffect(() => {
    if (!state.isAnswerRevealed) return undefined;

    const wasCorrect = state.selectedOptionIndex === state.activeQuestion.correctIndex;
    const isLastLevel = state.levelIndex === LEVELS.length - 1;

    const timer = setTimeout(() => {
      if (!wasCorrect) {
        dispatch({ type: 'END_RUN', payload: { result: 'lost' } });
      } else if (isLastLevel) {
        dispatch({ type: 'END_RUN', payload: { result: 'won' } });
      } else {
        dispatch({ type: 'ADVANCE_LEVEL', payload: { question: pickQuestionForLevel(state.levelIndex + 1) } });
      }
    }, REVEAL_DELAY_MS);

    return () => clearTimeout(timer);
    // Solo depende de isAnswerRevealed: pasa de false a true una vez por pregunta,
    // que es el único momento en que esta transición debe dispararse.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isAnswerRevealed]);

  return { state, startRun, selectAnswer, useFiftyFifty, useBookHint, closeHint, useSkip, quitRun, playAgain };
}
