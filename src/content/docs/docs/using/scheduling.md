---
title: Timing and schedules
description: Per-item durations, scheduling windows, shuffle, and URL items.
---

## Per-item durations

Each image in the sequence has its own **duration** — there's no global
seconds-per-image. Videos always play to natural end.

## Schedules

Items can carry scheduling windows so a single playlist self-programs:

- **Date ranges** — show a piece only during an exhibition run.
- **Weekdays** — weekday vs. weekend content.
- **Time windows** — morning loop vs. evening loop.

Out-of-window items are skipped silently; the sequence stays intentional.

## Shuffle

A per-playlist shuffle flag reorders items each cycle while still
respecting schedules and transitions.

## URL items

Add remote images or stream URLs as playlist items alongside local files —
useful for live feeds or externally hosted art. They behave like any other
sequence item for ordering and scheduling.

## Seamless transitions

The engine stages the *next* image under the current video before it ends,
so image reveals are instant. Back-to-back videos chain inside Kodi's
player for an invisible ~100 ms hop. An image holds through the load gap
when the next item is a video.
