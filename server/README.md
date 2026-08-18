# API de ranking · El Desafío de Tomey

Backend chico en Express + SQLite que guarda el top 10 de puntajes por nivel, compartido entre todos los jugadores.

## Endpoints

- `GET /api/niveles/:nivelId/ranking` → devuelve el top 10 del nivel, ordenado por puntaje.
- `POST /api/niveles/:nivelId/ranking` → agrega un puntaje y devuelve el top 10 actualizado.
  - Body JSON: `{ "name": string, "score": number entero, "levelReached": number entero }`
- `GET /health` → chequeo de salud.

## Desarrollo local

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

El servidor queda escuchando en `http://localhost:3001`. La base SQLite se crea sola en `server/data/ranking.sqlite`.

## Despliegue en Render

1. Subí el repo a GitHub (ya lo tenés).
2. En Render, creá un **Blueprint** apuntando a este repo: Render va a leer `server/render.yaml` automáticamente.
   - Si preferís configurarlo a mano en vez de con el blueprint: creá un **Web Service**, Root Directory `server`, Build Command `npm install`, Start Command `npm start`, y agregá un **Disk** montado en `/var/data`.
3. Configurá la variable de entorno `FRONTEND_ORIGIN` con la URL de GitHub Pages del front (por ejemplo `https://tu-usuario.github.io`). Podés poner varias separadas por coma si también querés permitir `localhost` para probar.
4. Una vez desplegado, copiá la URL pública que te da Render (algo como `https://tomey-ranking-api.onrender.com`) y configurala en el front como `VITE_API_BASE_URL` (ver `.env.example` en la raíz del proyecto).

Nota: en el plan free de Render el servicio se duerme tras un rato sin tráfico y la primera request después de eso tarda unos segundos en responder. Para un proyecto de cátedra es aceptable.
