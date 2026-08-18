import { Router } from 'express';
import { leaderboardCollection } from '../db.js';

const MAX_ENTRIES = 10;
const NAME_MAX_LENGTH = 40;

const router = Router({ mergeParams: true });

async function getTopEntries(nivelId) {
  const docs = await leaderboardCollection
    .find({ nivelId })
    .sort({ score: -1, createdAt: 1 })
    .limit(MAX_ENTRIES)
    .toArray();

  return docs.map((doc) => ({
    name: doc.name,
    score: doc.score,
    levelReached: doc.levelReached,
    date: doc.createdAt,
  }));
}

async function pruneToTopEntries(nivelId) {
  const entriesToKeep = await leaderboardCollection
    .find({ nivelId })
    .sort({ score: -1, createdAt: 1 })
    .limit(MAX_ENTRIES)
    .project({ _id: 1 })
    .toArray();

  await leaderboardCollection.deleteMany({
    nivelId,
    _id: { $nin: entriesToKeep.map((entry) => entry._id) },
  });
}

router.get('/', async (req, res) => {
  res.json(await getTopEntries(req.params.nivelId));
});

router.post('/', async (req, res) => {
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

  await leaderboardCollection.insertOne({
    nivelId,
    name: trimmedName,
    score,
    levelReached,
    createdAt: new Date().toISOString(),
  });

  await pruneToTopEntries(nivelId);

  res.status(201).json(await getTopEntries(nivelId));
});

export default router;
