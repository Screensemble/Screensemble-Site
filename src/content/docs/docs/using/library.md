---
title: Media library
description: The server's permanent media store — upload once, use on any display.
---

Every upload — whether pushed to a specific display or added directly —
is stored permanently on the server under `data/library/`. Content is
never trapped on one screen.

## The library page

`http://<server>:8080/library.html`

![Media library with upload, push-to-displays, library items, and shared playlists](/shots/docs/library-desktop.webp)

- Browse all stored items with thumbnails.
- **Upload** new media directly.
- **Push** selected items to selected displays — multi-select works on
  both sides.
- **Delete** library items (displays keep their local copies).

## Transfer integrity

Every push sends a SHA-256 hash with the file. The display verifies the
download before activating it — a corrupt transfer is dropped, reported,
and never goes live. Downloads stage through a `.part` file and replace
the active file atomically.

## Housekeeping on displays

In managed mode the display keeps a cache manifest and enforces a size cap
(the `cache_max_mb` player setting, default 4 GB). Files no longer
referenced by the playlist evict least-recently-used first; content the
sequence needs is never removed. The local media folder in Local mode is
never auto-evicted.
