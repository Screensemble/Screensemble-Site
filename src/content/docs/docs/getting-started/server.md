---
title: Install the server
description: Run Screensemble Server with Docker or Node — one container, no database.
---

## Docker (recommended)

```bash
docker run -d \
  --name screensemble \
  -p 8080:8080 \
  -v screensemble-data:/app/data \
  ghcr.io/screensemble/screensemble-server:latest
```

Open `http://<host>:8080` — the dashboard is served from the same port.

Everything persists under `/app/data` (display registry, library media,
shared playlists), so mount a volume as shown.

## Node

Requires Node.js 20+.

```bash
git clone https://github.com/Screensemble/Screensemble-Server.git
cd Screensemble-Server
npm ci --omit=dev
PORT=8080 npm start
```

## Configuration

| Variable | Default | Purpose |
|---|---|---|
| `PORT` | `8080` | HTTP + WebSocket port. Displays connect outbound to this port. |
| `DATA_DIR` | `./data` | Where the registry, library media, and playlists persist. |

## Verify

- `GET http://<host>:8080/api/info` returns server name and version.
- The dashboard at `/` lists displays (empty until you pair one).
- The library page at `/library.html` manages server-side media and playlists.
