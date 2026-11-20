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

- `data/players.json` — display identities, tokens, status.
- `data/auth.db`, `data/auth_secret` — user accounts and session secret.
- `data/library/` — the permanent media store.
- `data/playlists.json` — shared playlists and assignments.

## Sign-in

The dashboard requires a login (Better Auth, users stored in `data/auth.db`
inside the volume). First login is `screensemble` / `screensemble` — a
password change is forced immediately. There is no public sign-up;
admins add users at `/users.html`.

![Sign-in page](/shots/docs/login-desktop.webp)

![User management page](/shots/docs/users-desktop.webp)
Displays and media pulls are unaffected — they authenticate with their
pairing token, not a user account.

## Networking

- Displays connect **outbound** to the server port — the server needs no
  inbound path to display networks, and displays work behind NAT.
- If the server is behind a reverse proxy, make sure the WebSocket path
  `/ws/player` is upgraded correctly (`Upgrade`/`Connection` headers), and
  set `PUBLIC_URL` to the address displays should download media from.
- Displays download media from the same host they connected to, so Docker
  port mappings (`-p 8090:8080`) work without extra config.
- Use HTTPS (via the proxy) whenever the server is reachable beyond an
  isolated show network — device tokens travel in media URLs.

## Container

The image runs as the unprivileged `node` user (an entrypoint fixes
ownership of volumes created by older images) and has a Docker
`HEALTHCHECK` against `/api/health`.

## Updating

Pull the new image tag and recreate the container; data survives in the
volume. Display players update through the Kodi repository addon — install
it once and each release arrives as a normal addon update.
