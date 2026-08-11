const STORAGE_KEY_PREFIX = 'tomey-last-question-indices-';
let memoryFallback = {};

function readLastIndices(storageKey) {
  try {
    const parsed = JSON.parse(sessionStorage.getItem(storageKey));
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return memoryFallback;
  }
}

export function pickQuestionForLevel(levels, levelIndex, nivelId) {
  const storageKey = `${STORAGE_KEY_PREFIX}${nivelId}`;
  const { questions } = levels[levelIndex];
  const lastIndices = readLastIndices(storageKey);
  const lastIndex = lastIndices[levelIndex];
  const pool = questions.map((_, index) => index).filter((index) => index !== lastIndex || questions.length === 1);
  const chosenIndex = pool[Math.floor(Math.random() * pool.length)];

  lastIndices[levelIndex] = chosenIndex;
  memoryFallback = lastIndices;
  try {
    sessionStorage.setItem(storageKey, JSON.stringify(lastIndices));
  } catch {
    /* memoryFallback above already keeps this working for the rest of the tab session */
  }

  return { ...questions[chosenIndex] };
}
