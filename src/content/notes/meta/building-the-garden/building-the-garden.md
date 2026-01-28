---
name: Building the Garden
slug: building-the-garden
tags: [meta, project, learning]
growth: seedling
---

This is the first note in a new era for this website. So far I have kept the structure pretty grounded on corpo brand styles. A blog section, and about me section, pretty boring stuff. We are now going into a [[Digital Garden]] style. Pages will be connected and intertwined like wiki pages and you can explore everything like a mind map. I believe that is the best way to express myself, the things I do and how I do things.

## The Vision

- The homepage will now be a [[Graph]]. Perfect for the mind map vibe and perfect for someone who really loves [[Computer Science]].
- Everything is a note - no more "blog posts" vs "[[projects]]" distinction. No more rigid structures. Things connect organically and links will take us from ideas to projects to other ideas.
- Notes link to each other with [[wikilinks]]
- We will work on the [[graph]] visualization with cool filters and different views.
- Big hub nodes like [[svelte]] or "cars" connect to smaller notes, this will happen naturally as more notes connect to popular nodes.

## Technical Approach

Staying with [[sveltekit]] but building garden features:

- `remark-wiki-link` for parsing links
- Custom build-time [[graph]] computation
- Backlinks automatically generated
- [[d3-force]] (or similar) for the interactive graph

## The Journey

### Day 1

Decided to burn it all down (figuratively). The old site was too corporate, too "personal brand". I want something that feels alive, that grows, that connects ideas the way my brain does.

Hashing out the architecture, Key decisions:

- [[Graph]] is the homepage, not a feature
- Full [[wikilink]] syntax with backlinks
- Mobile can wait. "Best viewed with a computer."
- Everything becomes notes, even this meta-documentation

Next steps: prototype the graph computation and see how it feels, and restructure all my MD files.

### Day 2

- Upgraded to [[Svelte]] 5 and [[SvelteKit]] 2
- Installed all the [[graph]] related libraries like [[d3-force]] to build an initial version
- Experimented with filters and categorization

![current results](day2graph.png)

Next steps: organize notes, add proper tags and wikilinks to have a better looking graph.

### Day 3

- Consolidated all note scanning into a single prebuild script
- Proper parsing with `gray-matter` and `remark` instead of regex hacks
- Tags now create implicit [[graph]] edges - projects auto-link to their tech stack without needing explicit wikilinks in the body
- Went from 59 to 74 edges just from that
- Created my [[cv]] as a note with wikilinks everywhere - companies, universities, hobbies, all connected
- Built gardening scripts: `pnpm forage` finds missing notes, `pnpm sow` plants seedlings for them
- 56 seedlings waiting to be planted

Next steps: actually sow those seeds and start writing content.

### Day 4

- Fixed note detail pages not rendering - the universal load in `+page.ts` wasn't spreading server data
- Fixed [[wikilinks]] not rendering as links - wrote custom remark plugin that converts `linkReference` nodes to proper links
- Key insight: remark parses `[[text]]` as `[` + linkReference + `]`, not as a special node type
- Removed broken `@flowershow/remark-wiki-link` dependency, replaced with 40 lines of custom code
- Site now builds as fully static - ready for [[GitHub Pages]] and Neocities

Next steps: layout adjustments to all pages to fit new style of site.

### Day 5 - The Great Seedling Expansion

Expanded seedling. The approach: pick a note, chat about it with my LLM, gather the real stories and details, then write it up properly.

**Upgraded to budding:**

- All 13 gigs/jobs notes (eBay, LoadSmart, LogRock, Giphy, Instituto Eldorado, Empreguei, Teleo, Utyl, Safe Trace Café, Traço Leal, Repunzel, UNIFEI, University of Maryland)
- [[Bass]] - actual gear setup, Boss pedal OCD, custom pedalboard from Brazilian hardwoods
- [[Dactyl Manuform]] - the full rabbit hole from "maybe a smaller keyboard" to buying a 3D printer
- [[Chevette]] - including the legendary 6-hour nighttime heist story
- [[Woodworking]] - Steve Ramsey to Paul Sellers pipeline, the eternal workbench, multiple chickens and eggs
- [[Electronics]] - telecom background, the Bandeirante's 32 connections, projects in limbo

**Also updated:**

- [[Toyota Bandeirante]] - pristine condition with original manuals and dealer tag
- [[GM Classic]] - seedling outline with the real story
- Fixed wikilink pipe syntax across the entire codebase (was using `[[slug|display]]`, now just `[[Note Name]]`)

**Stats:** Went from 85 seedlings to ~70. Garden is growing.

Next steps: more seedlings, maybe tackle the tech notes or car sub-projects.

### Day 6 - Meta and Machines

More conversational expansion, but this time with a focus on organizing the chaos.

**Upgraded to budding:**

- [[Planted Aquarium]] - the full DIY sump setup with custom siphon overflow, now with Excalidraw diagrams
- [[Gaming PC]] - specs flex (9950X3D, 5080, 64GB DDR5), Lian Li RGB ecosystem hell, Linux gaming edge cases
- [[Bandeirante Power Steering]] - completed project write-up, Junior Cordeiro the steering wizard, F350 pump kit with Mercedes pulley

**Major updates:**

- [[Toyota Bandeirante]] - full roadmap from the Google Drive list, everything from done items to "maybe someday" dreams
- Transfer case corrected to 3-setting (not 2-speed) - the "tractor mode" is its own thing

**Created meta notes:**

- [[Notes to Expand Next]] - prioritized list of what to write next, balanced across hobbies/tech/life
- [[Ongoing Projects]] - every loose end mapped out, including the famous chicken-and-egg dependency chart

**New seedlings planted:**

- [[Gridfinity]] - the Zack Freedman modular organization system
- [[Underware]] - under-desk cable management project
- [[Bambu Lab A1]] - the printer that started as "I'll just use a print farm"
- [[Welding]] - currently learning for Chevette bodywork
- [[Fishkeeping]] - hub note for the aquarium hobby

**Stats:** 116 notes total (75 seedlings, 36 budding, 5 evergreen)

The garden is becoming self-documenting. Notes about notes. Meta all the way down.

Next steps: tackle tech stack placeholders, maybe expand the car sub-projects now that the roadmap is clear.
