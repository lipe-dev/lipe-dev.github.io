---
name: LoadSmart
slug: loadsmart
tags: [react, django, typescript, javascript, redux, styled-components, ci-cd]
growth: budding
---

# LoadSmart

Probably the most important job of my career. The way I approach engineering today was shaped by my time here.

## The Gig

[[LoadSmart]] was a logistics tech company focused on freight and trucking. I joined as their first dedicated front-end engineer - before me, front-end work was handled by full-stack devs as a side concern. My job was to change that.

## What I Actually Did

### Breaking Free from the Monolith

When I arrived, the front-end was tangled up inside a massive [[Django]] monolith. Every deploy meant deploying everything. Every change risked breaking something unrelated. Classic monolith problems.

I led the migration to a separate, modular [[React]] architecture. The key challenge? Zero downtime. We couldn't just flip a switch - we had to migrate piece by piece while hundreds of sales reps used the tool daily. It was like changing the engine of a car while driving it down the highway.

### Build Time Apocalypse

The build times were approaching an hour. An hour! Every PR became a coffee break. I got that down to under 5 minutes through a combination of dependency optimization, build configuration tuning, and just deleting stuff that shouldn't have been there in the first place.

### The Invisible SVG Vampire

One of my favorite bugs: SVG animations that kept running even when scrolled out of view. Sounds harmless, right? Except they were absolutely murdering CPU usage. Users complained their laptops were getting hot. Finding these invisible performance vampires and staking them was satisfying work.

### Testing? What Testing?

Code coverage when I joined: basically zero. Code coverage when I left: over 90% with meaningful tests. Not the kind of tests that just bump numbers - actual tests that catch actual bugs. Setting up the testing culture and infrastructure was as important as writing the tests themselves.

## The [[React]] Component Library

I also built [[@loadsmart-data-visualization]], a charting component library using [[Recharts]] that got published to [[NPM]]. It's still getting downloads to this day, which is both cool and slightly terrifying since nobody's maintaining it.

## The Vibe

This was peak startup energy for me. Working with some of the best engineers I've had the pleasure of collaborating with. Hard problems, smart people, fast iteration. The tool we built is still used daily by hundreds of reps.

## Why I Left

Eventually I had done what I came to do. The front-end was in a good place, the team had grown, and I was ready for new challenges. No drama, just the natural end of a chapter.

## Related

- [[@loadsmart-data-visualization]] - The component library I built there
- [[React]] - Primary framework
- [[Django]] - The monolith we escaped from
- [[CI/CD]] - Build pipeline work
