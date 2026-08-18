# API de ranking · El Desafío de Tomey

Backend chico en Express + MongoDB que guarda el top 10 de puntajes por nivel, compartido entre todos los jugadores.

## Endpoints

- `GET /api/niveles/:nivelId/ranking` → devuelve el top 10 del nivel, ordenado por puntaje.
- `POST /api/niveles/:nivelId/ranking` → agrega un puntaje y devuelve el top 10 actualizado.
  - Body JSON: `{ "name": string, "score": number entero, "levelReached": number entero }`
- `GET /health` → chequeo de salud.

## Base de datos: MongoDB Atlas (gratis)

1. Creá una cuenta en [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) y un cluster **M0 (Free)**.
2. En **Database Access**, creá un usuario de base de datos con contraseña.
3. En **Network Access**, agregá `0.0.0.0/0` (permitir desde cualquier IP) — Render en el plan free no tiene IP fija de salida.
4. En **Database → Connect → Drivers**, copiá el connection string (`mongodb+srv://...`). Agregale el nombre de la base al final, por ejemplo `/tomey`, antes de los parámetros `?`.

## Desarrollo local

```bash
cd server
npm install
cp .env.example .env   # completá MONGODB_URI con tu connection string de Atlas
npm run dev
```

El servidor queda escuchando en `http://localhost:3001`.

## Despliegue en Render

1. Subí el repo a GitHub (ya lo tenés).
2. En Render, creá un **Blueprint** apuntando a este repo, con Blueprint Path `server/render.yaml`. Render va a crear el Web Service con la configuración ya cargada (sin disco, porque ahora la persistencia la maneja MongoDB Atlas).
3. Completá las variables de entorno que quedaron marcadas para configurar a mano:
   - `MONGODB_URI`: el connection string de tu cluster de Atlas.
   - `FRONTEND_ORIGIN`: la URL de GitHub Pages del front (por ejemplo `https://tu-usuario.github.io`). Podés poner varias separadas por coma si también querés permitir `localhost` para probar.
4. Una vez desplegado, copiá la URL pública que te da Render (algo como `https://tomey-ranking-api.onrender.com`) y configurala en el front como `VITE_API_BASE_URL` (ver `.env.example` en la raíz del proyecto).

Nota: en el plan free de Render el servicio se duerme tras un rato sin tráfico y la primera request después de eso tarda unos segundos en responder. Los datos no se pierden porque viven en MongoDB Atlas, no en el disco del servicio.
