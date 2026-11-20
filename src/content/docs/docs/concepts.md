---
title: How Screensemble works
description: The architecture, the three operating modes, and the rules that keep every display intentional.
---

Screensemble has two cooperating pieces:

- The **performer** — a Kodi addon (`script.screensemble`) that owns the screen.
- The **conductor** — a Node/Express service that owns the fleet: display
  registry, media library, shared playlists, pairing, and remote commands.

Displays connect **out** to the conductor over a persistent WebSocket, so the
conductor never needs inbound access to the displays — they just need to reach
the conductor's HTTP port.

## The rule that shapes everything

> Every display always shows an intentional state.

The performer keeps a resident standby window beneath Kodi's fullscreen playback.
When a video ends, the preloaded next image is already staged underneath —
the reveal is immediate, and Kodi's UI never surfaces. When a playlist is
empty the display shows a branded standby or promo slides, never a launcher
or a black wall.

Content changes are **deferred to natural boundaries**: a media operation
queues a pending update that lands when the current video hits EOF or the
current image's timer expires. Uploads finish transferring before the flag
is even queued, so a mid-update display never cuts a piece short.

## Operating modes

| Mode | Conductor? | What it does |
|---|---|---|
| **Standalone / Local** | No | Full playlist management on-device: Kodi UI, web admin, phone remote. |
| **Managed** | Yes | All of the above, plus pairing, remote control, content pushes, shared playlists, and per-display conductor admin. |
| **Controlled** | Yes | Managed plus a conductor channel for coordinated multi-display cues. Prepare/Perform staging is in development. |

Details in [Operating modes](/docs/reference/modes/).

## What lives where

- **Media on the display** — files live in a local media folder
  (`special://profile/screensemble_media/` by default). The display keeps
  playing its cached content if the conductor disappears.
- **Media on the conductor** — everything uploaded also lands in the conductor's
  permanent library (`data/library/`), ready to reuse on other displays.
- **Playlist state on the display** — `media.json` holds the ordered
  sequence, per-item durations and schedules, shuffle, and settings.
- **Registry on the conductor** — `data/performers.json` holds display identity,
  tokens, and status; `data/playlists.json` holds the shared playlists.

## Identity and security

A display's identity is anchored to hardware (MAC-derived ID plus a Kodi
instance UUID), so reinstalls and data wipes rebind to the same display
instead of creating duplicates. Only displays paired with a one-time code
from the Control Room and confirmed on the TV are admitted; the conductor then
issues a per-device token and verifies it on every connect and download —
a spoofed hardware ID can't join or hijack a registry entry.
