# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/digital garden built with SvelteKit and mdsvex. Features an interactive D3 force-directed graph visualization showing connections between notes via wikilinks.

## Commands

```bash
pnpm dev          # Start dev server (runs compost first)
pnpm build        # Production build (runs compost first)
pnpm check        # TypeScript and Svelte type checking
pnpm lint         # Prettier + ESLint
pnpm format       # Auto-format with Prettier

# Garden maintenance scripts
pnpm compost      # Generate notes-data.ts from markdown files (required before dev/build)
pnpm forage       # Find wikilinks that don't resolve to existing notes
pnpm sow          # Create seedling notes for all missing wikilinks
pnpm survey       # List all notes grouped by growth stage
```

## Architecture

### Build-time Data Generation

The site uses a two-phase data pipeline:

1. **`pnpm compost`** (scripts/generate-notes-data.ts) runs before dev/build:
   - Scans `src/content/notes/` for markdown files
   - Extracts frontmatter and parses wikilinks from content
   - Builds graph data (nodes, edges, backlinks)
   - Outputs `src/lib/generated/notes-data.ts` with all note metadata, lookup maps, and graph data

2. **Layout server load** (`src/routes/+layout.server.ts`):
   - Imports generated data
   - Enriches nodes with icons from `src/lib/data/tech.ts`
   - Provides notes, graph, and backwards-compatible data to all routes

### Content Structure

Notes live in `src/content/notes/` with subdirectories:
- `posts/` - Blog posts (have date and image)
- `projects/` - Project showcases
- `tech/` - Technology notes (matched to icons via slug)
- `hobbies/` - Personal interests
- `gigs-and-jobs/` - Work history

Frontmatter schema:
```yaml
name: Display Name
slug: url-slug
tags: [tag1, tag2]
growth: seedling | budding | evergreen
date: YYYY-MM-DD  # optional, for posts
image: /path.jpg  # optional, for posts
description: text # optional
```

### Wikilink Resolution

Notes link to each other via `[[Note Name]]` or `[[slug]]` syntax. The mdsvex config uses `@flowershow/remark-wiki-link` with a custom resolver from generated data. Links create edges in the graph.

### Graph Visualization

`src/lib/components/Graph/Graph.svelte` renders an interactive D3 force-directed graph:
- Nodes are sized/colored by growth stage
- Tech notes display their SVG icons
- Edges represent wikilinks between notes
- Click navigates to note, drag repositions nodes

### Tech Icons

`src/lib/data/tech.ts` maps technology slugs to SVG icons (imported as raw strings). When a note's slug matches a tech entry, it displays that icon in the graph.

## Key Files

- `svelte.config.js` - SvelteKit config with mdsvex preprocessor
- `mdsvex.config.js` - Markdown processing with wikilink plugin
- `src/routes/[slug]/+page.server.ts` - Dynamic note pages with prerender entries
- `src/lib/generated/notes-data.ts` - Auto-generated, do not edit manually

## Writing Guidelines for Notes

When writing or editing note content:

- **Avoid mid-sentence dashes** like "this is something - and here's more." This pattern is a dead giveaway of AI-generated text. Use periods, commas, colons, or parentheses instead.
- **Use simple wikilinks** like `[[Note Name]]` without pipe syntax. Don't use `[[slug|display text]]`.
- **Keep the tone casual but serious** with occasional jokes. No corporate speak.
- **Ask for info rather than inventing** when details aren't available in existing notes.
