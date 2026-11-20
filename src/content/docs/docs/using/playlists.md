---
title: Shared playlists
description: Named, ordered playlists assigned to displays — sync pushes files, applies order, and can prune extras.
---

Shared playlists are named, ordered lists of library items with displays
assigned to them. They're the way to make several screens play the same
show.

## Sync

**Sync** on a playlist does three things for every assigned display:

1. **Push** any playlist files the display is missing (hash-verified).
2. **Apply the order** — the display's sequence is reordered to match.
3. **Prune** (optional) — with *Remove items not in playlist* enabled, the
   display is trimmed to exactly the playlist contents.

Edits to a playlist auto-sync on save; **Sync now** re-runs it manually.
Assign one playlist to many displays and they all converge to identical
content — the ensemble playing in concert.

## Boundary-safe by design

Sync never interrupts what's on screen. The conductor sends a deferred update:
pushes finish transferring first, the update flag queues after the batch
settles, and the new order applies at the next natural boundary — a video's
end or an image's timer expiry. An explicit *Restart* is still immediate
when you want it.
