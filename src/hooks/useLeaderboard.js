import { useEffect, useState } from 'react';

const STORAGE_KEY_PREFIX = 'tomey-leaderboard-nivel-';
const MAX_ENTRIES = 10;

function readEntries(storageKey) {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function useLeaderboard(nivelId) {
  const storageKey = `${STORAGE_KEY_PREFIX}${nivelId}`;
  const [entries, setEntries] = useState(() => readEntries(storageKey));
  const [isPersistent, setIsPersistent] = useState(true);

  useEffect(() => {
    setEntries(readEntries(storageKey));
  }, [storageKey]);

  function addEntry({ name, score, levelReached }) {
    const entry = { name, score, levelReached, date: new Date().toISOString() };
    const next = [...entries, entry]
      .sort((a, b) => b.score - a.score || new Date(b.date) - new Date(a.date))
      .slice(0, MAX_ENTRIES);

    setEntries(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      setIsPersistent(false);
    }
  }

  return { entries, addEntry, isPersistent };
}
