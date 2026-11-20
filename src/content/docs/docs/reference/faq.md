---
title: Troubleshooting and FAQ
description: Common issues and answers.
---

**The display shows a black screen between items.**
It shouldn't — transitions are covered by a staged underlay. If you see a
gap, update the addon: preloading and deferred-boundary fixes landed in
recent releases. Persistent gaps on a specific file are usually a decode
delay on that media.

**The display went offline but kept playing.**
That's by design. Content is cached locally; the playlist runs without the
server. It rejoins the fleet when the link returns.

**A reinstall created a duplicate display.**
It shouldn't — identity is hardware-anchored. Duplicates mean the device
reported a different MAC-derived ID (e.g. swapped NIC, or a VM). Remove the
stale registry entry from the dashboard.

**Pairing request never appears on the dashboard.**
Check that the display can reach `http://<server>:<port>/api/info` — the
link is outbound from the display, so firewalls must allow it out. A
*pairing code is invalid or expired* error means the code was already used
or is over 10 minutes old — reload the server's Pair page for a new one.

**A display shows "unpaired" or the server logs `player rejected`.**
Only displays paired through the Pair page are allowed. Reset the player
in its addon settings and pair it again.

**A push finished but nothing changed on screen.**
Also by design — updates land at the next natural content boundary (video
end or image timer). Use an explicit *Restart* for an immediate cut.

**Can displays be on different networks/VLANs?**
Yes — they only need outbound access to the server port. mDNS isn't used;
displays are configured with the server address directly.

**Where does media live?**
On the display: `special://profile/screensemble_media/` (or the configured
folder). On the server: `data/library/` inside the data volume.
