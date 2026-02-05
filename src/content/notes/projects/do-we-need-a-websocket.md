---
name: Do We Need a WebSocket?
slug: do-we-need-a-websocket
tags: [projects, ideas]
growth: evergreen
description: Engineering opinion as performance art
---

# Do We Need a WebSocket?

A single-page website that answers the eternal architecture question.

The answer is **NO**.

## The Backstory

At [[LogRock]], someone insisted we needed WebSockets for a simple endpoint
that checked if a background process was done. The endpoint was called
infrequently. Polling worked fine. But WebSockets sounded cooler.

So we built it with WebSockets.

The backend wasn't optimized for persistent connections. When it crashed
(and it did), the WebSocket approach made debugging harder and recovery
messier. We also ended up faking status messages on top because the WebSocket
couldn't actually report meaningful progress.

All that complexity for something polling handled perfectly well.

## When You Actually Need WebSockets

- **Real-time communication** - chat, multiplayer games, collaborative editing
- **Frequent data streams** - stock tickers, live sports scores, IoT sensors
- **Server-initiated updates** - when the server genuinely needs to push data
  without the client asking

## When You Don't

- Checking if a background job is done every few seconds
- Any endpoint that gets called less than once per second
- Anything where HTTP long-polling or SSE would work
- When you're going to fake the real-time updates anyway

## The Site

Pure HTML and CSS. One page. "NO" in giant letters. A reminder that simple
solutions exist and sometimes the boring choice is the right choice.

If you're asking "do we need a WebSocket?" the answer is almost always no.
If you really needed one, you wouldn't be asking.
