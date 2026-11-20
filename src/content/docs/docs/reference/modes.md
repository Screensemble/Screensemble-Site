---
title: Operating modes
description: Standalone, Managed, and Controlled — what each mode does and how displays move between them.
---

## Standalone / Local

The display runs entirely on-device: playlist, schedules, media folder,
web admin, phone remote. No conductor, no account, no cloud. This is the
fallback every display returns to — a managed display that loses its
conductor keeps playing its cached content exactly like a local one.

## Managed

Paired to a conductor. Everything Local does, plus:

- Registry entry on the conductor with live status and health.
- Remote commands (play/pause/stop/restart/rescan) down the WebSocket.
- Content pushes and shared-playlist syncs.
- The conductor's per-display admin page mirrors the local UI.

Switching into managed mode happens the moment pairing is approved —
no Kodi restart required.

## Controlled

Managed, plus a conductor channel for coordinated multi-display cues —
Prepare/Perform staging for synchronized performances across screens.

**Prepare** probes each display's clock (lowest-RTT sample wins) and stages
playlist item 1: videos pause on their first frame, images show
statically. **Perform** then converts one release instant into every
display's *own* monotonic clock (`at_mono`), so all displays start
together regardless of when each `perform` message lands — typically within a
frame or two on a healthy LAN. Release policies: all staged, at least
N, or proceed anyway, with a configurable lead time (500 ms default).
The Conductor tab shows live per-display readiness and probe RTT; the
conductor keeps re-probing every 30 s while a session stays prepared.

Hardware cues (e.g. the bundled ESP32 sketch) fire
`POST /api/triggers/:id` — the conductor owns the mapping, cooldown, and
retrigger policy, so a sensor can prepare a room, release a synced perform, or
restart a show without reconfiguring the device.

This is the newest layer; managed mode remains the stable foundation.

## Moving between modes

| Change | How |
|---|---|
| Local → Managed | Pair the display from the conductor's Pair page and confirm on the TV. |
| Managed → Local | Clear the conductor address / unpair — content stays. |
| Managed → Controlled | Conductor prepare — requires the conductor channel. |
