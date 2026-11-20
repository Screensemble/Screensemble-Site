---
title: The performer UI
description: Managing a display — on-TV media list, web admin, and phone remote.
---

Each display offers three surfaces, all editing the same playlist state:

## On-TV media list

Launch **Screensemble Performer** from Program add-ons. A custom window (styled
like the setup wizard) shows the sequence — reorder, toggle items on and
off, set durations, and cue restart/rescan. In managed mode the local
editing surfaces stay available.

## Web admin

`http://<display-ip>:8765` from any browser on the network — the full media
list plus device actions and system info. The conductor's per-display page
mirrors this UI remotely for paired displays.

## Phone remote

The same port serves a phone-friendly view — pair by QR, browse the
playlist, pick a media folder with the Kodi filesystem browser (roots,
drives, and translated Kodi paths included), and use remote control keys.

## The standby window

Beneath all of this sits the resident standby presentation: a branded standby
mark, promo slides, or the staged next image. It's what guarantees a
display never exposes the OS or Kodi UI during normal operation.
