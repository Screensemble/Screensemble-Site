---
title: Server API
description: The HTTP and WebSocket surface of Screensemble Server.
---

All endpoints are same-origin on the server port (default `8080`).

## Displays and pairing

| Endpoint | Purpose |
|---|---|
| `GET /api/info` | Server name and version. |
| `POST /api/pair/request` | Display asks to pair; appears on the dashboard. |
| `POST /api/pair/accept` / `POST /api/pair/decline` | Approve or dismiss a pairing request. |
| `GET /api/players` | Registered displays with status. |

## Media and uploads

| Endpoint | Purpose |
|---|---|
| `POST /api/uploads` | Upload media (lands in the library; optionally pushed to a display). |
| `GET /api/uploads/file/:id` | Fetch a staged upload (the pull target for displays). |
| `GET /api/library` | List library items. |
| `GET /api/library/file/:name` | Fetch a library file (pull target). |
| `POST /api/library/:name/push` | Push a library item to selected displays. |

## Playlists

| Endpoint | Purpose |
|---|---|
| `GET /api/playlists` · `POST /api/playlists` | List / create shared playlists. |
| `PATCH` / `DELETE /api/playlists/:id` | Update items, order, assignments, prune flag. |
| `POST /api/playlists/:id/sync` | Sync now — push missing files, apply order, optional prune. |

## Player channel

`WS /ws/player` — the persistent outbound connection each display holds.
Carries hello (with auth token), status/health reports, commands, media
operations, `pull_file` jobs (URL + SHA-256), and conductor messages.
