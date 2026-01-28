---
name: Irriplans.com Legacy
slug: irriplans.com-legacy
tags: [projects, react, next, maplibre]
growth: budding
description: Legacy version of the Irrigation system mapping tool
images: ['/images/projects/legacy_irriplans.com/1.png']
---

# Navigating the Irrigation Maze: Unearthing Challenges and Growth

## Table of Contents

## Embarking on the Journey

Join me in unearthing the saga of **[[Irriplans.com]]**, where mapping meets irrigation in a dance of technology and innovation. This mapping marvel, tailored for irrigation aficionados, boasts a star feature – a map-drawing tool that's the backbone of the experience.

Imagine this: clients traversing a digital landscape powered by the enchanting [[MapLibre]] (minus the complexity of [[Mapbox]]'s hush-hush antics), weaving their irrigation dreams onto the canvas. And that's not all – these water wranglers can seamlessly print and share their aquatic creations with clients. A true harmony of form and function!

## Tackling the Tempests

Ahoy, matey! Prepare to navigate through coding conundrums as we dive into the technical trenches of this venture. The grand challenge that loomed before us? The marriage of a real-time database ([[Firestore]]) with the enigmatic [[MapLibre]]. Sounds simple, right? Not quite, for [[Firestore]]'s array limitations put a damper on our parade.

Our ingenious solution? Forging custom data models and invoking Firestore's `withConverter` incantations to elegantly mold the data. A true alchemy of tech and creativity!

But wait, there's more! The tumultuous waters of React and its virtual DOM added another layer of complexity. Enter MapLibre, needing to directly manipulate the DOM. It was a true tango of technologies, requiring some crafty `ref` choreography and a few missteps along the way.

## Gaining Insights

As we sailed through this venture, I gathered a treasure trove of insights. Mastering the intricacies of [[MapLibre]] was a journey through a cartographer's wonderland. Custom events and layer styling wove a tapestry of [[GeoJSON]] finesse. And let's not forget the dance of custom map controls, which I finessed into harmony with [[Svelte]]'s portal magic.

Ah, [[React]] – a worthy adversary in this tale. Yet, I emerged victorious, having learned to navigate the [[React]] waters with [[MapLibre]]'s compass.

## Concluding the Expedition

As we bid adieu to this chapter, reflections abound. The journey through **[[Irriplans.com]]** took me back to my cartographic roots, sparking a rekindling of my [[GIS]] prowess and a nostalgic return to [[Firebase]]'s embrace. This was an expedition where I bridged the waters of innovation and legacy.

So here's to the irrigation dreamers, the mapping maestros, and the code captains who braved the tides. The journey may have been challenging, but it's the challenges that fertilize our growth in the evergreen fields of technology.
