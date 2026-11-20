---
title: Get started
description: Choose how to install Screensemble — player only, or player plus server.
---

Screensemble's two parts can be adopted independently. Pick your path:

## I just want one reliable display

Install the **[player](/docs/getting-started/player/)** on a Kodi device and
use **Local mode**. No server needed — you'll manage the playlist from the
on-TV UI, the built-in web admin, or a phone on the same network.

## I want a fleet

1. Install the **[server](/docs/getting-started/server/)** on any always-on
   host (Docker is easiest — one container, no database).
2. Install the **[player](/docs/getting-started/player/)** on each display.
3. **[Pair each display](/docs/getting-started/pairing/)** — scan its QR
   from the server's Pair page and confirm on the TV; it becomes managed.
4. Build a **[shared playlist](/docs/getting-started/first-display/)** and
   push it to every screen.

## Requirements

- **Player:** any device that runs Kodi 21+ (Omega) — Android TV boxes,
  Windows/Linux PCs, Raspberry Pi, LibreELEC.
- **Server:** Node.js 20+ or Docker. One container, no database, no
  external services.
- **Network:** displays need outbound HTTP/WebSocket access to the server
  (default port `8080`). The server never connects to the displays.
