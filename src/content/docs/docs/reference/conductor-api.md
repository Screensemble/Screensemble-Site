---
title: Conductor API
description: The HTTP and WebSocket surface of Screensemble Conductor.
---

All endpoints are on the conductor port (default `8080`). Everything except
the public endpoints below requires a signed-in Control Room session.

## Public

| Endpoint | Purpose |
|---|---|
| `GET /api/health` | Liveness check. |
| `GET /api/info` | Conductor name, version, and minimum client version. |
| `POST /api/pair/request` | Display presents a one-time pairing code; returns a `pairing_id`. |
| `POST /api/pair/accept` / `POST /api/pair/decline` | Display reports the on-TV answer; accept returns its `player_id` and device token. |
| `GET /api/library/file/:name?token=` · `GET /api/uploads/file/:id?token=` | Media pulls, authorized by a paired display's token. |
| `POST /api/triggers/:trigger_id` | Hardware cue fire (bearer: `TRIGGER_TOKEN` or any paired display token). |
| `/api/auth/*` | Sign-in and sessions (no public sign-up). |

## Conductor and cues

| Endpoint | Purpose |
|---|---|
| `POST /api/conductor/prepare` | Probe display clocks, stage item 1 on every connected display (or `{"performers": [...]}`). |
| `POST /api/conductor/perform` | Release staged displays on one shared instant — `{"policy": "all"\|"min"\|"any", "min_ready": N, "lead_ms": 500}`. |
| `GET /api/conductor` | Session state: per-display prepared/online + clock probe RTT. |
| `POST /api/cues/:id` | Fire a cue (bearer `CUE_TOKEN` or performer token). |
| `GET /api/cues` · `PUT` / `DELETE /api/cues/:id` | Cue map management (Control Room session required). |

Each cue maps an id to `{action: prepare|perform|sync|restart, performers?,
cooldown_ms, retrigger: ignore|restart|queue, lead_ms}` in
`data/cues.json`. `sync` arms and releases on one deadline in a
single call. The ESP32 firmware lives under `firmware/esp32-cue/` in
the conductor repository.

## Displays and pairing

| Endpoint | Purpose |
|---|---|
| `POST /api/pair/invite` | Issue a single-use pairing code (valid 10 minutes). |
| `GET /api/pair/pending` | Offers waiting for the on-TV confirm. |
| `GET /api/performers` · `GET /api/performers/:id` | Registered displays with live status (tokens are never returned). |
| `POST /api/performers/:id/labels` | Set labels. |
| `POST /api/performers/:id/command` | Send a command (restart, prepare/perform, …). |
| `GET /api/performers/:id/media` · `POST /api/performers/:id/media/:op` | Read or edit the display's playlist. |
| `GET` / `POST /api/performers/:id/settings` | Read or change performer settings. |
| `POST /api/performers/:id/upload?name=` | Upload a file and push it to the display. |
| `DELETE /api/performers/:id` | Remove a display (disconnects it and revokes its token). |

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
| `GET` / `POST /api/library/:name/frame` | Frozen-frame extraction (ffmpeg, server-side) — preview at `?t=` / save the frame as a library image. |

## Users

| Endpoint | Purpose |
|---|---|
| `GET /api/me` · `POST /api/me/set-password` | Current user; change own password. |
| `GET` / `POST /api/users` · `DELETE /api/users/:id` · `POST /api/users/:id/password` | Admin user management. |

## Performer channel

`WS /ws/player` — the persistent outbound connection each display holds.
The first message is a hello with the display's hardware ID and device
token; unpaired displays get `unauthorized` and are disconnected. After
that it carries status reports, commands, media operations, `pull_file`
jobs (URL + SHA-256), `clock_probe`/`clock_pong` time sync, and
conductor prepare/perform commands (`perform` carries `at_mono`, the release deadline
in the display's own monotonic clock). The conductor pings every
30 seconds and drops displays that stop answering.

## Compatibility

Legacy names keep working: `/api/players/*` mirrors
`/api/performers/*`, `/api/triggers/:id` fires cues, `TRIGGER_TOKEN` is an
alias for `CUE_TOKEN`, and conductor `arm`/`go`/`disarm` route to
prepare/perform/unprepare. `data/players.json` and `data/triggers.json`
migrate to `performers.json` / `cues.json` on first boot.
