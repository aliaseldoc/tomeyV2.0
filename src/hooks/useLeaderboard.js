import { useCallback, useEffect, useState } from 'react';
import { API_BASE_URL } from '../config.js';

export function useLeaderboard(nivelId) {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEntries = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/niveles/${nivelId}/ranking`);
      if (!response.ok) throw new Error('No se pudo obtener el ranking.');
      setEntries(await response.json());
    } catch {
      setError('No pudimos cargar el ranking. Probá de nuevo más tarde.');
    } finally {
      setIsLoading(false);
    }
  }, [nivelId]);

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  async function addEntry({ name, score, levelReached }) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/niveles/${nivelId}/ranking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, score, levelReached }),
      });
      if (!response.ok) throw new Error('No se pudo guardar el puntaje.');
      setEntries(await response.json());
    } catch {
      setError('No pudimos guardar tu puntaje en el ranking. Probá de nuevo más tarde.');
    }
  }

  return { entries, addEntry, isLoading, error };
}
