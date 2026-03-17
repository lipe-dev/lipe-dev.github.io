---
name: Faz3D
slug: faz3d
tags: [projects, react, typescript, next, tailwind-css]
growth: budding
description: 3D printing quote platform with automated slicing and pricing
---

# Faz3D

A platform for automating 3D printing quotes. The name is a triple reference:
"faz" is Portuguese for "makes", the .xyz domain maps to the three axes of
3D space, and well, it's about 3D printing.

I own a printer. The quote process for custom prints is tedious. Someone
sends a file, you slice it, estimate time and material, factor in costs,
reply manually. Both sides wait. I wanted to automate that.

## The Architecture

The interesting constraint: 3D slicing is CPU-intensive and requires the
actual slicer software (OrcaSlicer) installed locally. You can't run OrcaSlicer
in a Lambda function. So the cloud handles coordination, and my printer's PC
does the work.

```
Cloud (Vercel + Supabase)
  ↕ poll every few seconds
My Printer's PC (Node.js worker)
  → download model from Supabase Storage
  → slice with OrcaSlicer CLI
  → calculate price
  → report results back
```

This means the worker only runs when the PC is on. That's fine: the printer
only works when the PC is on anyway. The two are the same machine.

### Pricing That Isn't Hardcoded

Pricing lives server-side, not in the frontend. Material costs change. Machine
rates vary. The worker fetches pricing from the API and caches it so it's not
hitting the database on every job. Change a price in the admin panel, next job
picks it up.

### Dependent Form State

The quote form has cascading dependencies. Material choice affects available
colors. Quality preset affects layer height and infill defaults. Quantity could
affect bulk pricing. Managing this without the form becoming a mess of useEffects
took thought.

### The Monorepo

Three apps in pnpm workspaces: the quotes frontend (customer-facing), admin
dashboard, and the worker. Each deploys or runs independently but shares types.

## Current State

The quote flow works end-to-end: upload STL, configure settings, worker slices
it, price appears. Not deployed yet. Still nailing the pricing model before
going live.

## Stack

- [[Next.js]] + [[React]] 19 + [[TypeScript]]
- [[Tailwind CSS]] 4
- Supabase (Postgres + Storage)
- Node.js worker running on my printer's PC
- OrcaSlicer CLI for slicing
- pnpm workspaces

## Why I'm Building This

I own a [[Bambu Lab A1]]. I've done the manual quote dance. It's tedious on
both sides. This scratches my own itch while letting me play with edge
compute and computational geometry - problems that don't come up in typical
frontend work.
