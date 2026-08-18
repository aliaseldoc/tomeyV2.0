import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Falta la variable de entorno MONGODB_URI.');
}

const client = new MongoClient(MONGODB_URI);
await client.connect();

const db = client.db();
export const leaderboardCollection = db.collection('leaderboardEntries');

await leaderboardCollection.createIndex({ nivelId: 1, score: -1, createdAt: 1 });
