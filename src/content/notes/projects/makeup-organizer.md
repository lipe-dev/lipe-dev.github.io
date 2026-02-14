---
name: Makeup Organizer
slug: makeup-organizer
tags: [project, 3d-printing, openscad, gridfinity]
growth: budding
description: Parametric modular storage system for makeup
---

# Makeup Organizer

A fully parametric, [[Gridfinity]]-compatible makeup organizer built in [[OpenSCAD]].
Gift project for my wife and sisters.

## The Concept

Modular storage that sits on standard Gridfinity baseplates. The system has two
parts: **trays** (outer shells with decorative exteriors) and **cups** (removable
inserts that hold actual items). Mix and match decorations, swap cup layouts,
change one parameter and everything updates.

## Core Design: The Decoration Budget

The key insight that makes everything work. A fixed 5mm band is reserved between
the Gridfinity grid edge and the tray wall. Decorations "spend" from this budget
to add visual interest. No decoration ever exceeds the grid boundary, regardless
of style. Gridfinity compatibility is guaranteed by constraint, not careful
measurement.

## Three Tray Styles

| Style | Technique | Vibe |
|-------|-----------|------|
| Straight | Simple linear extrude | Clean, minimal |
| Rounded | Minkowski sum with sphere | Soft, friendly |
| Puffed | 30-slice sine wave bulge | Organic, pillowy |

The puffed style is the star. Each slice follows a sine curve from base to top,
creating a gentle outward bulge at the midpoint. Decorations for puffed trays
follow the same curve.

## Pluggable Decorations

One variable controls the active decoration:

- **Columns** - Half-round pills evenly spaced around the perimeter
- **Bricks** - Beveled running-bond pattern (the classic look)
- **Honeycomb** - Hexagonal grid that protrudes outward
- **Fluting** - Vertical half-round grooves carved into an outer band
- **Weave** - Small offset bricks creating a woven texture
- **Fins** - Tapered vertical fins with rounded edges, wide at the base and narrow at the top

Switching decorations is a single line change. The decoration modules handle
all the perimeter math internally.

## The Stadium Shape

Everything is built on a "stadium" primitive: a rectangle with semicircular or
rounded ends. Four corner circles joined with `hull()`. This gives independent
control of corner radius, from sharp rectangles to full capsules. Every tray
body, cup, cavity, and decoration band uses this shape.

## Technical Challenges

**CSG Order of Operations**: Boolean operations in OpenSCAD are order-sensitive.
The pattern that finally worked: union the body + decorations + interior sleeves
first, then subtract decoration cuts, then hollow out the cavity. Getting this
wrong causes decorations to either disappear or get filled back in.

**Perimeter Walking**: Placing decorations evenly around a stadium shape requires
math. Three functions handle it: total perimeter length, XY position at distance
S along the perimeter, and tangent direction at that point. From the tangent,
derive the outward normal for pushing decorations to the correct radial depth.

**Hex Spacing**: Getting uniform honeycomb spacing took the most iteration.
The relationship between hex size, wall thickness, and spacing went through
many formulas before landing on values that looked right.

## Current Status

Working: all three tray styles, all six decoration styles (columns, bricks,
honeycomb, fluting, weave, fins), configurable multi-cup interiors, and
separate removable cups.

Shelved for now: inward hex punch-through. The geometry works but there are
higher priority details to finish first.

## File Structure

```
params.scad         - All configurable parameters
shared.scad         - Stadium, cavity, perimeter functions
decor-*.scad        - One file per decoration style
tray-*.scad         - One file per tray style
cup.scad            - Removable cup inserts
preview-all.scad    - Side-by-side comparison view
```

Started as a 600-line monolith, now properly modularized. Each tray style
renders independently, decorations are pluggable, parameters live in one place.

## Related

- [[Gridfinity]] - The modular organization system this is built for
- [[OpenSCAD]] - Programmatic CAD with CSG
- [[3D Printing]] - Where these designs become real
- [[Bambu Lab A1]] - The printer that makes them
