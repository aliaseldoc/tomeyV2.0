import cors from 'cors';
import express from 'express';
import rankingRouter from './routes/ranking.js';

const PORT = process.env.PORT ?? 3001;
const allowedOrigins = process.env.FRONTEND_ORIGIN?.split(',').map((origin) => origin.trim());

const app = express();
app.use(cors({ origin: allowedOrigins ?? '*' }));
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.use('/api/niveles/:nivelId/ranking', rankingRouter);

app.listen(PORT, () => {
  console.log(`Servidor de ranking escuchando en el puerto ${PORT}`);
});
