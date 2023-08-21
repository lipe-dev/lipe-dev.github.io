---
slug: 'irriplans.com'
name: 'Irriplans.com'
description: 'Irrigation system mapping tool'
techSlugs: [
    "svelte",
    "sveltekit",
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

In the end, we ended up with a great product and users can collaborate on maps drawing in real time, and their clients can also see the changes happening at the same time!

# Learnings

My biggest takeaway from this project was learning how to develop advanced features on MapLibre. There are many custom events, a lot of custom layer styling to deal with the GeoJSON source data that we generate, plenty custom map controls which I managed to integrate seamlesly into Svelte components, thanks to its direct DOM manipulation.

Oh, also, this is my first full production software made with Svelte and SvelteKit shipped! I am pretty stoked about that.

# Final Thoughts

This project in particular was a port of the previous version, that I also built, made with Next.js.

Overall, redoing it in Svelte was a much better experience. Being able to directly manipulate the DOM was a huge plus (not that you are not able with React, but in Svelte is just how things go!). 

Not relying on MapLibre wrappers for the library was another huge win. In the Next.js project I used React-Mapbox-GL, which is wonky when used with Maplibre and things did not go as smoothly.

All in all, I consider this project a huge success.

Best of luck to my client turned friend John in his endeavors with Irriplans and I hope we can work together again in the future!