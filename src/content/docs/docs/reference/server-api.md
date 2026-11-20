---
title: Server API
description: The HTTP and WebSocket surface of Screensemble Server.
---

All endpoints are on the server port (default `8080`). Everything except
the public endpoints below requires a signed-in dashboard session.

## Public

| Endpoint | Purpose |
|---|---|
| `GET /api/health` | Liveness check. |
| `GET /api/info` | Server name, version, and minimum client version. |
| `POST /api/pair/request` | Display presents a one-time pairing code; returns a `pairing_id`. |
| `POST /api/pair/accept` / `POST /api/pair/decline` | Display reports the on-TV answer; accept returns its `player_id` and device token. |
| `GET /api/library/file/:name?token=` · `GET /api/uploads/file/:id?token=` | Media pulls, authorized by a paired display's token. |
| `POST /api/triggers/:trigger_id` | Hardware trigger (bearer token). Dispatch is still in progress. |
| `/api/auth/*` | Sign-in and sessions (no public sign-up). |

## Displays and pairing

| Endpoint | Purpose |
|---|---|
| `POST /api/pair/invite` | Issue a single-use pairing code (valid 10 minutes). |
| `GET /api/pair/pending` | Offers waiting for the on-TV confirm. |
| `GET /api/players` · `GET /api/players/:id` | Registered displays with live status (tokens are never returned). |
| `POST /api/players/:id/labels` | Set labels. |
| `POST /api/players/:id/command` | Send a command (restart, arm/go, …). |
| `GET /api/players/:id/media` · `POST /api/players/:id/media/:op` | Read or edit the display's playlist. |
| `GET` / `POST /api/players/:id/settings` | Read or change player settings. |
| `POST /api/players/:id/upload?name=` | Upload a file and push it to the display. |
| `DELETE /api/players/:id` | Remove a display (disconnects it and revokes its token). |

## Library and playlists

| Endpoint | Purpose |
|---|---|
| `GET /api/library` · `POST /api/library?name=` | List / upload library media (raw request body). |
| `DELETE /api/library/:name` | Delete a library item. |
| `POST /api/library/:name/push` | Push a library item to selected displays. |
| `GET /api/playlists` | List shared playlists. |
| `POST` / `DELETE /api/playlists/:name` | Create or update / delete a playlist. |
| `POST /api/playlists/:name/sync` | Sync now — push missing files, apply order, optional prune. |
| `GET /api/uploads` | Upload and push job progress. |

## Users

| Endpoint | Purpose |
|---|---|
| `GET /api/me` · `POST /api/me/set-password` | Current user; change own password. |
| `GET` / `POST /api/users` · `DELETE /api/users/:id` · `POST /api/users/:id/password` | Admin user management. |

## Player channel

`WS /ws/player` — the persistent outbound connection each display holds.
The first message is a hello with the display's hardware ID and device
token; unpaired displays get `unauthorized` and are disconnected. After
that it carries status reports, commands, media operations, `pull_file`
jobs (URL + SHA-256), and conductor messages. The server pings every
30 seconds and drops displays that stop answering.
