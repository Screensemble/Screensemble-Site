---
title: Deployment
description: Running Screensemble Server in production — Docker, persistence, and updates.
---

## Docker image

Releases publish to GHCR as `ghcr.io/screensemble/screensemble-server`
with tags `:v<version>`, `:<major.minor>`, and `:latest`.

```bash
docker run -d \
  --name screensemble \
  --restart unless-stopped \
  -p 8080:8080 \
  -v screensemble-data:/app/data \
  ghcr.io/screensemble/screensemble-server:latest
```

## Persistence

Mount a volume at `/app/data` — it holds everything that matters:

- `data/registry.json` — display identities, tokens, status.
- `data/library/` — the permanent media store.
- `data/playlists.json` — shared playlists and assignments.

## Networking

- Displays connect **outbound** to the server port — the server needs no
  inbound path to display networks, and displays work behind NAT.
- If the server is behind a reverse proxy, make sure the WebSocket path
  `/ws/player` is upgraded correctly (`Upgrade`/`Connection` headers).

## Updating

Pull the new image tag and recreate the container; data survives in the
volume. Display players update through the Kodi repository addon — install
it once and each release arrives as a normal addon update.
