---
name: GC Summary
slug: gc-summary
tags: [projects, react, typescript, next]
growth: budding
description: Grand Chase guild tracker - a vibe coding experiment
---

# GC Summary

A character progression tracker for Grand Chase Classic. Also an experiment
in what happens when you let AI write all your code without architectural
guidance.

## Grand Chase Classic

Grand Chase was huge in Brazil in the late 2000s. A platform fighter MMO
with grinding, guilds, and that addictive loop of running the same quest
thousands of times for random loot. When they relaunched it as "Classic"
a few years ago, I dove back in. Joined Apocalypse (the #1 guild at the
time), relived the old grind.

The guild needed a way to track everyone's progress. The existing solution:
a shared Google Slides template where each player filled in their stats.
Functional, but messy.

## The Tool

A web app where you input your character data (levels, gear, achievements)
and generate a shareable summary dashboard. Filter what to show, sort by
power level, see guild-wide stats at a glance.

**Stack:** Next.js 15, React 19, TypeScript, Zod, React Hook Form, Tailwind.

## The Experiment

I built this 100% via AI prompts in Cursor. But here's the key: I played
product manager, not tech lead. Every prompt was WHAT I wanted, never HOW
to build it. No architectural guidance, no technical constraints, no "use
this pattern" or "structure it like that."

Pure requirements, zero implementation direction. Can AI be the entire
engineering team if you just tell it what the product should do?

**The result:** It works. The guild still uses it.

**The codebase:** Absolute mess. Arrays within arrays, deeply nested loops,
387 lines in the main page component, multiple form instances fighting for
state. Hard to maintain, harder to extend.

## What I Learned

Vibe coding can ship features fast, but without architectural oversight
you're building technical debt at the same pace. The AI doesn't know your
domain, doesn't think about future you maintaining this, and will happily
generate the most straightforward solution even if it's the wrong abstraction.

This was with basic Cursor setup circa 2024. With proper MCP integrations,
better prompts, and actual code review, the outcome would be different. The
tool isn't the problem - the process was.

## The Lesson

AI-assisted development needs guardrails:
- Clear architectural constraints upfront
- Human review of generated patterns, not just functionality
- Willingness to say "regenerate this differently"

"It works" is a low bar. "It works and I can maintain it" is the real goal.

## Still Running

The guild still uses it. Sometimes the best code is the code that ships,
even if it makes you wince when you open the repo.
