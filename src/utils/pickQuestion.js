import { LEVELS } from '../data/levels.js';

const STORAGE_KEY = 'tomey-last-question-indices';
let memoryFallback = {};

function readLastIndices() {
  try {
    const parsed = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return memoryFallback;
  }
}

export function pickQuestionForLevel(levelIndex) {
  const { questions } = LEVELS[levelIndex];
  const lastIndices = readLastIndices();
  const lastIndex = lastIndices[levelIndex];
  const pool = questions.map((_, index) => index).filter((index) => index !== lastIndex || questions.length === 1);
  const chosenIndex = pool[Math.floor(Math.random() * pool.length)];

  lastIndices[levelIndex] = chosenIndex;
  memoryFallback = lastIndices;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(lastIndices));
  } catch {
    /* memoryFallback above already keeps this working for the rest of the tab session */
  }

  return { ...questions[chosenIndex] };
}
