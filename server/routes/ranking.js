import { Router } from 'express';
import db from '../db.js';

const MAX_ENTRIES = 10;
const NAME_MAX_LENGTH = 40;

const router = Router({ mergeParams: true });

function getTopEntries(nivelId) {
  return db
    .prepare(
      `SELECT name, score, level_reached AS levelReached, created_at AS date
       FROM leaderboard_entries
       WHERE nivel_id = ?
       ORDER BY score DESC, created_at ASC
       LIMIT ?`,
    )
    .all(nivelId, MAX_ENTRIES);
}

function pruneToTopEntries(nivelId) {
  db.prepare(
    `DELETE FROM leaderboard_entries
     WHERE nivel_id = ?
     AND id NOT IN (
       SELECT id FROM leaderboard_entries WHERE nivel_id = ? ORDER BY score DESC, created_at ASC LIMIT ?
     )`,
  ).run(nivelId, nivelId, MAX_ENTRIES);
}

router.get('/', (req, res) => {
  res.json(getTopEntries(req.params.nivelId));
});

router.post('/', (req, res) => {
  const { nivelId } = req.params;
  const { name, score, levelReached } = req.body ?? {};

  const trimmedName = typeof name === 'string' ? name.trim() : '';
  const isValid =
    trimmedName.length > 0 &&
    trimmedName.length <= NAME_MAX_LENGTH &&
    Number.isInteger(score) &&
    score >= 0 &&
    Number.isInteger(levelReached) &&
    levelReached >= 1;

  if (!isValid) {
    res.status(400).json({ error: 'Datos de puntaje inválidos.' });
    return;
  }

  db.prepare(
    `INSERT INTO leaderboard_entries (nivel_id, name, score, level_reached, created_at)
     VALUES (?, ?, ?, ?, ?)`,
  ).run(nivelId, trimmedName, score, levelReached, new Date().toISOString());

  pruneToTopEntries(nivelId);

  res.status(201).json(getTopEntries(nivelId));
});

export default router;
