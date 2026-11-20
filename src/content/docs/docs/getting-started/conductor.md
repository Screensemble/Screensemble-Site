---
title: Install the conductor
description: Run Screensemble Conductor with Docker or Node — one container, no database.
---

## Docker (recommended)

```bash
docker run -d \
  --name screensemble \
  -p 8080:8080 \
  -v screensemble-data:/app/data \
  ghcr.io/screensemble/screensemble-conductor:latest
```

Open `http://<host>:8080` — the Control Room is served from the same port.
Sign in as `screensemble` / `screensemble`; you must choose a new password
right away. There is no public sign-up — admins add users at `/users.html`.

Everything persists under `/app/data` (display registry, library media,
shared playlists, user accounts), so mount a volume as shown. The
container runs as an unprivileged user and reports health on
`/api/health`.

## Node

Requires Node.js 20+.

```bash
git clone https://github.com/Screensemble/Conductor.git
cd Conductor
npm ci --omit=dev
PORT=8080 npm start
```

Data is written to `./data` in the working directory.

## Configuration

| Variable | Default | Purpose |
|---|---|---|
| `PORT` | `8080` | HTTP + WebSocket port. Displays connect outbound to this port. |
| `HOST` | `0.0.0.0` | Bind address. |
| `SERVER_NAME` / `SERVER_OWNER` / `SERVER_INFO` | `Screensemble Conductor` / — | Shown on the TV when it asks to pair. |
| `MIN_CLIENT_VERSION` | `0.0.0` | Refuse pairing from older performers. |
| `PUBLIC_URL` | — | Base URL displays download media from (set behind a reverse proxy). Defaults to the address the display connected to. |
| `AUTH_DEFAULT_USER` / `AUTH_DEFAULT_PASSWORD` | `screensemble` / `screensemble` | First-boot admin account. |
| `AUTH_SECRET` | generated | Session signing secret (stored in `data/auth_secret` if unset). |
| `MAX_UPLOAD_MB` | `4096` | Largest accepted upload. |
| `TRIGGER_TOKEN` | — | Shared bearer token for hardware cues. |

## Verify

- `GET http://<host>:8080/api/health` returns `{"status": "ok", ...}`.
- `GET http://<host>:8080/api/info` returns conductor name and version.
- The Control Room at `/` lists displays (empty until you pair one).
- The library page at `/library.html` manages server-side media and playlists.
