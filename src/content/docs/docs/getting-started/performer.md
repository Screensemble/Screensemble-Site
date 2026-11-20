---
title: Install the performer
description: Install the Screensemble Kodi addon on a display device.
---

The performer is a Kodi addon (`script.screensemble`). Any device running
Kodi 21+ (Omega) works — Android TV boxes, PCs, Raspberry Pi.

## Install the repository addon

The performer installs through the Screensemble Repository — that's what
makes updates arrive as normal Kodi updates with nothing to sideload.

1. In Kodi: **Settings → File manager → Add source** → enter
   `https://screensemble.com/setup/`.
2. **Add-ons → Install from zip file** → pick that source →
   `repository.screensemble.zip`.
3. **Install from repository → Screensemble → Services → Screensemble
   Performer**.

The repository zip is also attached to the
[latest release](https://github.com/Screensemble/Performer/releases/latest)
if you prefer to sideload it from USB.

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
