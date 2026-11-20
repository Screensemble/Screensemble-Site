---
title: Pair a display
description: Connect a display to the server and switch it to managed mode.
---

Pairing registers the display with the server and switches it to managed
mode — no restart needed; the server link starts immediately.

## Pair via QR or code

1. On the display, run Screensemble Player and choose **Pair** in the setup
   wizard (or open the web admin's pairing page).
2. Enter the server address, or scan the QR code with a phone on the same
   network.
3. A pairing request appears on the server dashboard — click **Accept**.
4. The display flips to managed mode and registers itself.

Declined requests are dismissed on the dashboard; the display can re-request.

## What pairing does

- Generates a **hardware-anchored display ID** — a MAC-derived ID plus a
  Kodi instance UUID. Reinstalls and data wipes rebind to the same display.
- Mints a **per-device auth token**, stored on both sides. The server
  verifies it on every connection, so a forged hardware ID can't take over
  a registry entry.
- Displays paired before tokens existed mint one automatically on first
  connect, and the server binds it (trust-on-first-use).

## Unpairing

Clear the server address in the player settings (or from the server's
display page) — the display drops back to Local mode and keeps its content.
