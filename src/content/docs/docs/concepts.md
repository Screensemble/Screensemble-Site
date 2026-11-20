---
title: How Screensemble works
description: The architecture, the three operating modes, and the rules that keep every display intentional.
---

Screensemble has two cooperating pieces:

- The **player** — a Kodi addon (`script.screensemble`) that owns the screen.
- The **server** — a Node/Express service that owns the fleet: display
  registry, media library, shared playlists, pairing, and remote commands.

Displays connect **out** to the server over a persistent WebSocket, so the
server never needs inbound access to the displays — they just need to reach
the server's HTTP port.

## The rule that shapes everything

> Every display always shows an intentional state.

The player keeps a resident idle window beneath Kodi's fullscreen playback.
When a video ends, the preloaded next image is already staged underneath —
the reveal is immediate, and Kodi's UI never surfaces. When a playlist is
empty the display shows a branded standby or promo slides, never a launcher
or a black wall.

Content changes are **deferred to natural boundaries**: a media operation
queues a pending update that lands when the current video hits EOF or the
current image's timer expires. Uploads finish transferring before the flag
is even queued, so a mid-update display never cuts a piece short.

## Operating modes

| Mode | Server? | What it does |
|---|---|---|
| **Standalone / Local** | No | Full playlist management on-device: Kodi UI, web admin, phone remote. |
| **Managed** | Yes | All of the above, plus pairing, remote control, content pushes, shared playlists, and per-display server admin. |
| **Controlled** | Yes | Managed plus a conductor channel for coordinated multi-display cues. Arm/Go staging is in development. |

Details in [Operating modes](/docs/reference/modes/).

## What lives where

- **Media on the display** — files live in a local media folder
  (`special://profile/screensemble_media/` by default). The display keeps
  playing its cached content if the server disappears.
- **Media on the server** — everything uploaded also lands in the server's
  permanent library (`data/library/`), ready to reuse on other displays.
- **Playlist state on the display** — `media.json` holds the ordered
  sequence, per-item durations and schedules, shuffle, and settings.
- **Registry on the server** — `data/players.json` holds display identity,
  tokens, and status; `data/playlists.json` holds the shared playlists.

## Identity and security

A display's identity is anchored to hardware (MAC-derived ID plus a Kodi
instance UUID), so reinstalls and data wipes rebind to the same display
instead of creating duplicates. Only displays paired with a one-time code
from the dashboard and confirmed on the TV are admitted; the server then
issues a per-device token and verifies it on every connect and download —
a spoofed hardware ID can't join or hijack a registry entry.
