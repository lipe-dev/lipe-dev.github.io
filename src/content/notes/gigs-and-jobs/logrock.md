---
name: LogRock
slug: logrock
tags: [work, react, typescript, next-js, gatsby, tailwind-css, github-actions, vercel, ci-cd]
growth: budding
---

# LogRock

A founding engineer role that turned into a front-row seat to watch a company find its identity through three pivots.

## How It Started

A former CTO and VP from [[LoadSmart]] were starting a company and invited me and a fellow ex-LoadSmarter before it was even officially founded. That kind of invitation means something. We were the entire engineering team for a while before eventually growing to around 10 engineers.

## The Company's Journey

**Phase 1: Compliance tool.** Helping trucking companies stay on top of regulation, document storage, inspection reminders. The regulatory paperwork in trucking is enormous. Solid idea, but hard to monetize.

**Phase 2: Tech platform for agencies.** The end goal was always insurance anyway, so they pivoted toward supporting insurance agencies with tech, and started acquiring partners: three agencies with very different approaches but similar problems.

**Phase 3: Becoming the agency.** Eventually absorbed the partner agencies and became an insurance company in its own right, powered by the compliance data and tech they'd been building all along.

## What I Built

### The Quote System

An insurance quoting FSM serving all three agencies simultaneously. Insurance quoting is deceptively complex: dozens of paths depending on driver history, vehicle types, coverage needs, and business rules that kept evolving with every pivot.

The three agencies each had their own flavor: one built around a trucking YouTuber/influencer who used his platform to sell insurance, one a younger team that made cold calling work through sheer intensity, and one a traditional broker. All three had similar baseline conversion rates before the new system. After: 6x above that benchmark, validated by all three agencies.

### CI/CD Pipeline

Set up the entire deployment infrastructure with [[GitHub Actions]], Terraform, and [[Vercel]]. Parallel deploys in under 2 minutes.

### TypeScript Enum Generation

A pre-start script that hit the APIs, fetched all enums and object shapes, and generated TypeScript files automatically. Local dev server would fail immediately if anything in the API contract changed. Deployments hard-failed if the API was unreachable. Stale types could never reach production.

### Email Template System

Modular email templating tool powering 150+ marketing campaigns plus all transactional emails. One source of truth, reusable components, consistent output across the board.

### AI Initiatives

Led early AI experiments before everyone had an AI strategy: a custom ChatGPT client for sales reps and Devin.ai setup for the engineering team.

## The Later Days

As the insurance pivot matured the work shifted. Complex FSMs gave way to forms and tables. Important for the business, not the kind of engineering that keeps you sharp.

## The Ending

My stock option vesting period was coming to an end and I was already thinking about moving on for new challenges. The company ran a broad layoff that cleared out most of the senior engineering staff. The timing lined up.

## Related

- [[LogRock.com - Website]] - The marketing site
- [[React]] - Primary framework
- [[TypeScript]] - Including the enum generation tooling
- [[CI/CD]] - Pipeline architecture
- [[GitHub Actions]] - Automation backbone
