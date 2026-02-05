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

I own a printer. The quote process for custom prints is tedious - someone
sends a file, you slice it, estimate time and material, factor in costs,
reply manually. Both sides wait. I wanted to automate that.

## The Engineering Challenges

### 3D Model Processing at the Edge

The core problem: take an uploaded 3D model and figure out what it costs to
print. That means calculating layer count, estimating print time, determining
how much support material the geometry requires. Computational geometry, not
typical web dev.

This runs on Cloudflare Workers. Edge compute for something CPU-intensive
sounds counterintuitive, but it means the processing happens close to the
user and scales automatically. The tradeoff is you're constrained by worker
limits, so the slicing algorithm had to be optimized for that environment.

### Pricing That Isn't Hardcoded

The pricing logic lives in the backend, not the frontend. Material costs
change. Machine rates vary. Margins get tweaked. Keeping this server-side
means the business can adjust pricing without touching the apps.

There's a caching layer keyed on model hash plus settings. Re-slicing
identical requests wastes compute, and edge compute isn't free.

### Dependent Form State

The quote form has cascading dependencies. Material choice affects available
quality options. Quality affects estimated time. Quantity affects bulk
discounts. Managing this without the form becoming a tangled mess of
useEffects took some thought.

### Monorepo Structure

Four apps managed with pnpm workspaces - landing page, quote form, admin
dashboard, and the worker backend. Each app deploys independently, shares
types and utilities, stays focused on one job.

## Current State

MVP. The quote flow works end-to-end, but it's not deployed yet. Still
iterating on the pricing model and validating the business assumptions
before going live.

## Stack

- [[Next.js]] + [[React]] 19 + [[TypeScript]]
- [[Tailwind CSS]] 4
- Cloudflare Workers
- React Query for server state
- pnpm workspaces

## Why I'm Building This

I own a [[Bambu Lab A1]]. I've done the manual quote dance. It's tedious on
both sides. This scratches my own itch while letting me play with edge
compute and computational geometry - problems that don't come up in typical
frontend work.
