---
title: Get started
description: Choose how to install Screensemble — performer only, or performer plus conductor.
---

Screensemble's two parts can be adopted independently. Pick your path:

## I just want one reliable display

Install the **[performer](/docs/getting-started/performer/)** on a Kodi device and
use **Local mode**. No conductor needed — you'll manage the playlist from the
on-TV UI, the built-in web admin, or a phone on the same network.

## I want a fleet

1. Install the **[conductor](/docs/getting-started/conductor/)** on any always-on
   host (Docker is easiest — one container, no database).
2. Install the **[performer](/docs/getting-started/performer/)** on each display.
3. **[Pair each display](/docs/getting-started/pairing/)** — scan its QR
   from the conductor's Pair page and confirm on the TV; it becomes managed.
4. Build a **[shared playlist](/docs/getting-started/first-display/)** and
   push it to every screen.

## Requirements

- **Performer:** any device that runs Kodi 21+ (Omega) — Android TV boxes,
  Windows/Linux PCs, Raspberry Pi, LibreELEC.
- **Conductor:** Node.js 20+ or Docker. One container, no database, no
  external services.
- **Network:** displays need outbound HTTP/WebSocket access to the conductor
  (default port `8080`). The conductor never connects to the displays.
