---
name: Irriplans.com
slug: irriplans.com
tags: [projects, svelte, sveltekit, maplibre, firestore]
growth: budding
description: Real-time collaborative irrigation mapping tool
images: ['/images/projects/legacy_irriplans.com/1.png']
---

# Irriplans.com

Mapping software for irrigation contractors. Draw systems on a map, generate
prints, share links for real-time collaboration.

## The Starting Point

The client, John, had a working tool. "Working" is generous. It was a single
JavaScript file stitched together from code found on Google. It could draw
on a map and export images. The export method? Screenshots. Literally
screenshotting the browser.

He hired me to add features and make it maintainable.

## First Rewrite: Next.js

I rebuilt it properly in [[Next.js]]. Real architecture. Data handling with
[[Firestore]] for real-time sync. User authentication. Multiple pages.
Actual image export instead of screenshots.

The core challenge was storing [[GeoJSON]] in Firestore. The database doesn't
handle nested arrays well, and GeoJSON is nothing but nested arrays. Custom
data models with Firestore's `withConverter` solved it - transform on the
way in, transform on the way out.

Task done, client happy, long-term contract signed for ongoing features.

## Second Rewrite: SvelteKit

Then I learned [[Svelte]]. Loved it. Realized it was perfect for this project.

Map libraries like [[MapLibre]] want direct DOM access for custom controls.
React's virtual DOM makes that awkward - you're always fighting the
abstraction. Svelte compiles away, so you work with the DOM directly.

I rebuilt the entire app in [[SvelteKit]] overnight. For free. Partly to
practice, partly because I knew it would be better. The client loved it
even more. The code was so simple that he - not a developer - could read
and understand it.

## Stack

- [[SvelteKit]]
- [[MapLibre]]
- [[Firestore]] for real-time sync
- Custom GeoJSON data converters
