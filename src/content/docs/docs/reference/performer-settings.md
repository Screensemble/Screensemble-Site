---
title: Performer settings
description: The Screensemble addon settings that matter for day-to-day operation.
---

Settings live in Kodi's addon settings for **Screensemble Performer**
(`script.screensemble`). The notable ones:

| Setting | Default | Purpose |
|---|---|---|
| `server_url` | — | Screensemble conductor address; empty means Local mode. |
| `server_auth_token` | — | Per-device token issued by the conductor at pairing. Set automatically; the display won't connect without it. |
| `media_folder` | profile media dir | Where playlist files live. Defaults to `special://profile/screensemble_media/`; a Kodi filesystem picker is available in the web UI. |
| `cache_max_mb` | `4096` | Managed-mode cache cap. Orphaned files evict least-recently-used first; playlist files are never removed. |
| `idle_promos` | on | Promo slides while the playlist is empty (Local mode); managed displays show standby. |
| `local_lock` | off | Require a password to exit to the Kodi UI — prompts on every exit path and gates the web admin. |
| `local_password` | — | The exit password (masked in settings, settable in the wizard). |
| `display_name` | device name | Shown on the Control Room and in pairing requests. |

## State files

Inside the addon profile (`special://profile/`):

- `media.json` — the sequence, per-item durations/schedules, shuffle.
- `media_manifest.json` — the managed-mode cache manifest.
- `instance_id` — the Kodi-instance half of the hardware-anchored
  display ID.

## Kiosk lockdown beyond Kodi

Kodi cannot intercept Android TV's **Home** button — no app can. For a
display the public can reach, combine the screen lock with Android's
**app pinning** (Settings → Security → App pinning): pinned apps need the
device lock credential to leave, which covers the exit paths Kodi can't.
