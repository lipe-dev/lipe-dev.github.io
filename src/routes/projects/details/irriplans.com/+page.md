---
slug: 'irriplans.com'
name: 'Irriplans.com'
order: 1
description: 'Irrigation system mapping tool'
techSlugs: [
    "svelte",
    "sveltekit",
    "maplibre"
]
images: ['/images/projects/legacy_irriplans.com/1.png']
---

# Navigating Waters with Irriplans: Mapping Success, One Drop at a Time

## Table of Contents

## Introduction

Welcome to the tale of **Irriplans.com**, where we irrigate your mapping needs with a splash of innovation! This mapping software, tailor-made for irrigation champs and contractors, dives deep into simplifying the complex choreography of irrigation planning. The pièce de résistance? A map-drawing feature that's the heartbeat of this aqua-inspired application.

Imagine this: clients surfing a dynamic map, powered by the swanky MapLibreGL JS (let's not mention Mapbox's closed-source shindig), embellishing it with irrigation gems. And wait, there's more! These water wizards can summon prints straight from their browser and even whip up shareable links for their clients. Talk about making a splash!

## Conquering Challenges

Ahoy, matey! The treacherous challenge that stared us down? Blending a real-time database (Firestore) with the majestic MapLibre. But alas, our sails got caught in a breeze! Storing GeoJSON in Firestore? That's a no-go, thanks to Firestore's array-related quirks.

Our workaround? Crafting bespoke data models and whipping up Firestore's `withConverter` spells to shape the data just right. It was like wielding a magic wand, only digital!

The outcome? Victory! Collaborative real-time map drawing, where users dance in harmony with the changing landscape, as their clients watch the magic unfold.

## Unveiling Wisdom

The treasure chest of wisdom I unearthed from this venture was mastering the art of advanced MapLibre maneuvers. Custom events, layer styling galore to tame the wild GeoJSON data we conjured – it was a cartographer's dream. And here's the twist: I seamlessly wove custom map controls into Svelte components. The secret sauce? Svelte's knack for direct DOM enchantment.

Oh, did I mention? This voyage marked my Svelte debut, with SvelteKit cruising at the helm! A full-blown production software set sail, and I'm riding the waves of excitement.

## Grand Finale

Ladies and gentlemen, presenting a rebirth story! The phoenix of projects, rising anew as **Irriplans**, shed its Next.js cocoon for a dazzling Svelte metamorphosis. Svelte's DOM dexterity added a delightful twist, making DOM manipulation a breeze – not to diss React, but Svelte had me at 'Hello.'

No more Mapbox wrappers! The sea of MapLibre rocked smoother without the Mapbox tantrums. Smooth sailing, indeed!

In the grand symphony of software, **Irriplans** hits the high notes. Wishing my client-turned-comrade, John, bon voyage in his watery exploits with **Irriplans**. Here's to more collaborations and mapping marvels on the horizon!
