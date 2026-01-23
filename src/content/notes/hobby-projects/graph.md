---
name: Graph Visualization
slug: graph
tags:
  - project
growth: budding
---

# Graph Visualization

The graph is a force-directed visualization showing how notes in this [[digital-garden]] connect to each other.

## How It Works

The graph uses [[d3-force]] to simulate physical forces between nodes:
- **Nodes** represent individual notes
- **Edges** represent [[wikilinks]] between notes
- **Forces** push and pull nodes to find a balanced layout

## Technical Implementation

### Force Simulation
- **Link force** - Connected nodes attract
- **Charge force** - All nodes repel slightly (prevents clustering)
- **Center force** - Keeps the graph centered
- **Collision force** - Prevents node overlap

### Interactions
- **Hover** - Highlights node and its connections
- **Click** - Navigates to that note
- **Drag** - Temporarily repositions nodes
- **Current note** - Highlighted with animated gradient

### Node Features
- Size based on number of connections
- Notes with images show thumbnails
- Current page highlighted
- Hover shows note name

## Design Decisions

### Why a Graph?
- Visual representation of knowledge connections
- Discover relationships between ideas
- See isolated notes that need more links
- Understand the structure of knowledge

### Placement
- Shown in sidebar on note pages
- Centers on current note
- Provides context while reading

## Built With

- [[d3-force]] - Force simulation library
- [[svelte]] - Reactive UI
- SVG - Rendering
- CSS animations - Gradient effects

## Related

- [[digital-garden]] - The project this is part of
- [[d3-force]] - Library used
- [[svelte]] - Framework for reactivity
