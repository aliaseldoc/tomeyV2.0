import { useState } from 'react';

const STORAGE_KEY = 'tomey-leaderboard-v1';
const MAX_ENTRIES = 20;

function readEntries() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function useLeaderboard() {
  const [entries, setEntries] = useState(readEntries);
  const [isPersistent, setIsPersistent] = useState(true);

  function addEntry({ name, score, levelReached }) {
    const entry = { name, score, levelReached, date: new Date().toISOString() };
    const next = [...entries, entry]
      .sort((a, b) => b.score - a.score || new Date(b.date) - new Date(a.date))
      .slice(0, MAX_ENTRIES);

    setEntries(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      setIsPersistent(false);
    }
  }

  return { entries, addEntry, isPersistent };
}
