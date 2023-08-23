---
slug: "irriplans.com-legacy"
name: Irriplans.com Legacy
order: 1
description: Legacy version of the Irrigation system mapping tool
techSlugs: [
    "react",
    "next",
    "maplibre"
]
images: ['/images/projects/legacy_irriplans.com/1.png']
---

# About the project

Irriplans.com is a mapping software destined to irrigation companies and contractors. It comes with a map drawing feature, which is at the core of the application.

Clients can navigate a map, which is based on MapLibreGL JS, and add map irrigation features and components.

Users can also print the maps straight from the browser and obtain shareable links, that they can send to their clients.

# Challenges

The biggest challenge in this project was integrating a real time database (firestore) with MapLibre. This would be easy if we could just store a GeoJSON in firestore, but we can't because of firestore limitations around arrays.

The solution was to create custom data models and implement firestores's `withConverter` methods to transform the data accordingly.

Another big challenge was getting everything to work with React, specially with its virtual DOM, since MapLibre needs to manipulate the DOM directly. But after a few hickups and a lot of `ref` passing, I got it done.

# Learnings

My biggest takeaway from this project was learning how to develop advanced features on MapLibre. There are many custom events, a lot of custom layer styling to deal with the GeoJSON source data that we generate, plenty custom map controls also that required some nifty portal manipulation to get them to integrate properly.

# Final Thoughts

This was a great oportunity to flex my map realted muscles and get back into working with firebase, both things that I haven't done in quite a while.