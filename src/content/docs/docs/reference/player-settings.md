---
title: Player settings
description: The Screensemble addon settings that matter for day-to-day operation.
---

Settings live in Kodi's addon settings for **Screensemble Player**
(`script.screensemble`). The notable ones:

| Setting | Default | Purpose |
|---|---|---|
| `server_url` | — | Screensemble server address; empty means Local mode. |
| `server_auth_token` | — | Per-device token minted at pairing; auto-generated if empty. |
| `media_folder` | profile media dir | Where playlist files live. Defaults to `special://profile/screensemble_media/`; a Kodi filesystem picker is available in the web UI. |
| `cache_max_mb` | `4096` | Managed-mode cache cap. Orphaned files evict least-recently-used first; playlist files are never removed. |
| `idle_promos` | on | Promo slides while the playlist is empty (Local mode); managed displays show standby. |
| `display_name` | device name | Shown on the dashboard and in pairing requests. |

## State files

Inside the addon profile (`special://profile/`):

- `media.json` — the sequence, per-item durations/schedules, shuffle.
- `media_manifest.json` — the managed-mode cache manifest.
- `instance_id` — the Kodi-instance half of the hardware-anchored
  display ID.
