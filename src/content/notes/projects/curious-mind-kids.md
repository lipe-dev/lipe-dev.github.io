---
name: Curious Mind Kids
slug: curious-mind-kids
tags: [projects, svelte, javascript, kids]
growth: seedling
description: Printable daily science journal for kids
---

# Curious Mind Kids

A printable science journal for kids ages 4-12. The constraint: no special
purchases, household items only. The activities are long-running observations
you track over days or weeks with pen and paper.

Moon cycles, plant growth races, which fruit rots first, how fast water
evaporates. Things that teach patience and observation, not just a
five-minute experiment.

## How It Works

A [[SvelteKit]] project that generates 365 SVG pages from templates.
Each template maps to a day range: days 1-56 track the moon cycle, later
ranges will cover other experiments. A build script reads the SVG templates,
injects the day number into each page, and outputs 365 printable files.

The output is static SVGs. No app to install, no screen to stare at.
Print the year, fill it in with a pencil, done.

## Current State

Early. Moon cycle pages are designed and scheduled. The brainstorm doc
has dozens of experiment ideas waiting to become templates. Still figuring
out the full year's schedule before building all the SVGs out.
