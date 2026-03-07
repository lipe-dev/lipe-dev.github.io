---
name: LoadSmart
slug: loadsmart
tags: [work, react, django, typescript, javascript, redux, styled-components, ci-cd]
growth: budding
---

# LoadSmart

Probably the most important job of my career. The way I approach engineering today was shaped here.

## The Gig

LoadSmart was a logistics tech company focused on freight and trucking. Someone needs a load hauled from A to B, they get a quote (via the public site or API integration for larger shippers like Coca-Cola), LoadSmart finds a carrier and handles the whole operation. The quote is final. That's what the customer pays.

I joined as their first dedicated front-end engineer. Before me, front-end was a side concern handled by full-stack devs. My job was to change that.

The company was around 30 engineers when I joined. We all fit in one open office, which also meant some legendary Counter-Strike tournaments at happy hour. By the time I left, it had grown past 200, split across multiple rooms, gone fully remote during the pandemic, and scattered around the world.

## The Product

Two sides: public-facing and internal.

**Public site**: thousands of clients per day getting freight quotes, requesting loads, API integrations for enterprise shippers. All of this went through front-end I worked on. 1,000+ loads handled every day.

**Internal tool**: the operations side. Sales reps and load managers working in it all day to keep those loads moving. What that looked like:

- **Carrier sourcing**: reps finding suitable carriers and contacting them through the app
- **Load tracking**: real-time map tracking once a carrier was assigned
- **Finite state machine**: I built the front-end for the FSM controlling every state a load moves through, from quoted to sourced to in-transit to delivered, with many states in between
- **Task management**: a full task system for reps tracking what needed to happen at each stage. A completed load required specific documents, a checklist enforced that. Hundreds of different task types total.
- **Load reassignment**: reps handing off loads to the right people for each part of the process

## What I Fixed

### The Monolith Escape

The frontend was tangled inside a massive [[Django]] monolith. Every deploy meant deploying everything. I led the migration to a separate modular [[React]] architecture with zero downtime. Hundreds of reps used the tool daily so we migrated piece by piece, live. Like changing the engine of a car while driving it down the highway.

### Build Times

Build times were approaching an hour. I got that down to under 5 minutes through dependency optimization, build config tuning, and deleting things that shouldn't have been there.

### The SVG Vampire

SVG animations running off-screen, invisible but hammering CPU. Users' laptops were getting hot. Tracked them down, killed them, fixed the underlying pattern so it couldn't happen again.

### Testing Culture

Code coverage when I joined: basically zero. When I left: over 90%, with tests that actually catch bugs rather than just inflate numbers. Setting up the culture and infrastructure mattered as much as writing the tests.

## Performance and Reliability

Got all public-facing front-end to a perfect 100 on Lighthouse. Zero crashes across monitoring tools including Sentry and DataDog.

## The Component Library

Built [[@loadsmart-data-visualization]], a charting component library using [[Recharts]], published to [[NPM]]. Still getting downloads to this day with no one maintaining it, which is both flattering and slightly terrifying.

## The Experimental Squad

Toward the end, I was hand-picked into a smaller squad tasked with building solutions for a specific client segment: companies too big for the manual public site quoting flow but not yet at the enterprise API integration tier. A different kind of problem, smaller team, more autonomy.

## Why I Left

I had done what I came to do. The front-end was in a good place, the team had grown, and I was ready for something new. No drama, just the natural end of a chapter.

## Related

- [[@loadsmart-data-visualization]] - The charting library
- [[React]] - Primary framework
- [[Django]] - The monolith we escaped from
- [[CI/CD]] - Build pipeline work
- [[TypeScript]] - Introduced during my time there
