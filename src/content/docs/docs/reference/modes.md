---
title: Operating modes
description: Standalone, Managed, and Controlled — what each mode does and how displays move between them.
---

## Standalone / Local

The display runs entirely on-device: playlist, schedules, media folder,
web admin, phone remote. No server, no account, no cloud. This is the
fallback every display returns to — a managed display that loses its
server keeps playing its cached content exactly like a local one.

## Managed

Paired to a server. Everything Local does, plus:

- Registry entry on the server with live status and health.
- Remote commands (play/pause/stop/restart/rescan) down the WebSocket.
- Content pushes and shared-playlist syncs.
- The server's per-display admin page mirrors the local UI.

Switching into managed mode happens the moment pairing is approved —
no Kodi restart required.

## Controlled

Managed, plus a conductor channel for coordinated multi-display cues —
Arm/Go staging for synchronized performances across screens. This is the
newest layer and still in development; managed mode remains the stable
foundation.

## Moving between modes

| Change | How |
|---|---|
| Local → Managed | Pair the display from the server's Pair page and confirm on the TV. |
| Managed → Local | Clear the server address / unpair — content stays. |
| Managed → Controlled | Conductor arm — requires the server conductor channel. |
