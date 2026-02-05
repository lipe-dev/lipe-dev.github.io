---
name: lipe.dev
slug: lipe-dev
tags: [projects, svelte, sveltekit, typescript, d3-force]
growth: budding
description: Personal digital garden with interactive graph visualization
---

# lipe.dev

This website. You're looking at it.

I got tired of the corporate portfolio template: hero section, three bullet
points, testimonials, blog page, footer. Every dev site looks the same. I
missed the old internet - when personal sites were weird and personal.

So I built something different. A digital garden where everything is
connected, the homepage is a force-directed graph, and notes grow from
seedlings to evergreen over time. No hero section. No testimonials. Just
a living document of how I think and what I know.

## The Build Pipeline

The interesting engineering isn't in the frontend - it's in what happens
before the site even loads.

### Compile-Time Over Runtime

Every wikilink, every backlink, every graph edge is computed at build time.
When you visit a page, there's no database query, no API call, no "loading
connections..." spinner. It's all pre-baked into static files.

The `compost` script runs before every build:
1. Recursively scans `src/content/notes/` for markdown files
2. Parses frontmatter with `gray-matter` (name, slug, tags, growth stage)
3. Builds the AST with `unified` + `remark-parse`
4. Walks the tree to extract wikilinks, skipping code blocks
5. Resolves each link to a slug via lookup maps
6. Constructs graph edges from both explicit wikilinks AND tag matches
7. Computes backlinks by inverting the edge list
8. Outputs everything to `src/lib/generated/notes-data.ts`

The result? A 6,000+ line generated file containing:
- `lookupByName: Record<string, string>` - normalized name → slug
- `lookupBySlug: Record<string, true>` - O(1) existence check
- `notes: GeneratedNote[]` - full metadata with links and backlinks
- `graphNodes` and `graphEdges` - ready for D3 consumption
- `noteTree` - folder structure for navigation

Zero runtime resolution. Import the data, use it directly.

### Wikilink Resolution

Resolution isn't just string matching. The script tries multiple strategies:
1. Exact name match (case-insensitive)
2. Direct slug match
3. Name with spaces → underscores
4. Name with spaces → hyphens

This means `[[SvelteKit]]`, `[[sveltekit]]`, and `[[svelte-kit]]` all
resolve to the same note. Forgiving input, consistent output.

### The Remark Plugin

I tried `@flowershow/remark-wiki-link`. It broke. Rather than fight someone
else's abstraction, I wrote my own in 40 lines.

The insight: remark doesn't parse `[[text]]` as a special node type. It
tokenizes it as `[` + `linkReference` + `]`. The plugin walks the AST,
finds this pattern, looks up the slug from the generated data, and replaces
the nodes with a proper `link` node pointing to `/${slug}`.

Backlinks come for free - they're computed during the build, so each note
knows what links to it without any runtime work.

### Implicit Edges from Tags

Here's a subtle feature: if a note is tagged `svelte`, and a note named
"Svelte" exists, an edge is created automatically. No need to manually
add `[[Svelte]]` to every Svelte-related note.

This bumped the graph from 59 to 74 edges instantly when I added it. The
graph became denser and more useful without touching any content.

## The Graph Visualization

The homepage is a force-directed graph. Not a list of posts, not a grid of
cards - a living visualization of how everything connects.

### D3 Force Simulation

The layout uses [[d3-force]] with tuned parameters:
- **Link force** - 150px distance between connected nodes
- **Charge force** - -400 repulsion to prevent clustering
- **Center force** - gentle pull toward the viewport center
- **Collision force** - radius-based padding to prevent overlap

Nodes are sized by growth stage: seedlings are small (10px), evergreen
notes are larger (22px). The visual weight matches the content weight.

### Dual Highlight Modes

The graph serves two contexts with different behavior:

**Homepage mode**: Tag-based filtering. Click "Projects" and non-project
nodes fade to 20% opacity. Edges dim unless both endpoints match. The
relevant subgraph emerges from the noise.

**Note page mode**: Slug-based highlighting. The current note glows, its
edges turn orange, connected nodes stay bright. After the simulation
stabilizes, the view auto-centers on the highlighted node.

### Node Types

Not all nodes look the same:
- **Image nodes** - Notes with hero images show circular thumbnails
- **Icon nodes** - Tech notes display their SVG icon (pulled from a
  registry in `src/lib/data/tech.ts`)
- **Standard nodes** - Colored circles based on growth stage or tags

The icon matching is slug-based. If a note's slug matches an entry in
the tech registry, it gets that icon in the graph. The [[React]] node
shows the React logo. The [[TypeScript]] node shows the TS logo.

### Interactions

- **Hover** - Node and connected edges highlight, tooltip shows name
- **Click** - Navigate to that note
- **Drag** - Reposition nodes (simulation re-heats on drag)
- **Zoom/Pan** - Mouse wheel zooms 0.2x-4x, click+drag pans

## Gardening Scripts

Maintaining a digital garden needs tooling. I built a few CLI helpers:

### `pnpm forage`
Finds wikilinks that point to nothing. If I write `[[Some Note]]` but
that note doesn't exist, forage catches it. Essential for keeping the
graph honest.

### `pnpm sow`
Creates seedling notes for all missing wikilinks. Run forage, see 20
missing notes, run sow, get 20 new files with frontmatter ready to fill.

### `pnpm survey`
Lists all notes grouped by growth stage. Quick way to see how many
seedlings need attention versus how much is already budding or evergreen.

The scripts are simple - just TypeScript files in `/scripts` that import
the generated data and do their thing. No framework, no dependencies
beyond what the build already uses.

## Stack Summary

- [[SvelteKit]] - Framework, static adapter for [[GitHub Pages]]
- [[Svelte]] 5 - Runes, `$effect` for reactive D3 bindings
- [[TypeScript]] - Throughout, including generated data
- [[d3-force]] - Graph simulation
- mdsvex - Markdown with Svelte components
- [[Tailwind CSS]] - Styling

## The Old Internet Vibes

No analytics. No cookie banners. No newsletter popup. No "subscribe for
updates." Just content, connections, and a weird graph that makes sense
to me.

If you've scrolled this far, you're probably the kind of person who
appreciates that.
