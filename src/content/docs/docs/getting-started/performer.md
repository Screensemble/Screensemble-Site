---
title: Install the performer
description: Install the Screensemble Kodi addon on a display device.
---

The performer is a Kodi addon (`script.screensemble`). Any device running
Kodi 21+ (Omega) works — Android TV boxes, PCs, Raspberry Pi.

## Install via the repository addon (recommended)

1. From the
   [latest release](https://github.com/Screensemble/Performer/releases/latest),
   download `repository.screensemble-<version>.zip`.
2. In Kodi: **Settings → Add-ons → Install from zip file** → pick the repo zip.
3. **Install from repository → Screensemble → Services → Screensemble Performer**.

The repository addon makes every future release arrive as a normal Kodi
addon update.

## Install the zip directly

Download `script.screensemble-<version>.zip` from the same release and use
**Install from zip file** — you just won't get automatic updates.

## First launch

Run **Screensemble Performer** from Program add-ons. The setup wizard offers
two paths:

- **Pair via code/QR** — connect to a Screensemble conductor (managed mode).
- **Local mode** — skip the conductor entirely and manage content on-device.

Media defaults to the addon profile folder
(`special://profile/screensemble_media/`), which exists on every Kodi
install. A custom media folder can be set later in addon settings.

## What runs on the display

- A background service that owns the standby window and the playlist engine.
- An on-TV admin UI (the media list) for local edits.
- A **web admin** on the display's port 8765 — open
  `http://<display-ip>:8765` from any browser on the network.
- A phone-friendly setup/remote surface on the same port.
