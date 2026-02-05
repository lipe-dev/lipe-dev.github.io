---
name: Vigilant Guide
slug: vigilant-guide
tags: [projects, react, javascript]
growth: budding
description: Instagram Story generator for Ladies That UX Floripa
---

# Vigilant Guide

A web tool for generating Instagram Story graphics. Built for Hanane, a UX
designer I worked with at [[LoadSmart]] who ran the Floripa chapter of
Ladies That UX.

The name? GitHub auto-generated it. I kept it because it's funny.

## The Problem

The community posted job opportunities for women in UX. Each post needed a
custom graphic: job title, company, link. Hanane was making these manually
in design tools, one at a time. Tedious.

## The Solution

A React app with live preview. Type the text, pick a background, download
the PNG. What took minutes now took seconds.

The interesting engineering: SVG template manipulation → inject text via DOM
→ render to Canvas → export as PNG. Browser-native image generation without
a backend.

## What Happened Next

The UI version worked, but there was still manual data entry. Hanane was
pulling job posts from an Airtable database anyway. Why not automate the
whole pipeline?

That became [[Ladies That Integrate]] - a Python CLI that reads directly from
Airtable and batch-generates all the graphics. Better image quality too,
since Pillow handles typography better than Canvas.

## The Stack

- [[React]] with styled-components
- SVG manipulation via DOMParser
- Canvas API for PNG export
- GitHub Actions → GitHub Pages deployment

## The Duo

Hanane and I made a good team at LoadSmart. She designed, I built. This side
project was the same dynamic: she had a real problem, I had the skills to
solve it. Good collaboration doesn't need a corporate context.
