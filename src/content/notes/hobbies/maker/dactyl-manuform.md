---
name: Dactyl Manuform
slug: dactyl-manuform
tags:
  - maker
  - keyboard
  - build-log
  - electronics
growth: budding
---

# Dactyl Manuform Keyboard Build

Building an ergonomic split mechanical keyboard - the Dactyl Manuform. This is a fully custom keyboard with a curved key well designed to match the natural movement of fingers.

## Why Dactyl Manuform?

After years of typing on flat keyboards, I wanted something more ergonomic. The Dactyl Manuform offers:
- **Split design** - Shoulders at natural width
- **Columnar layout** - Keys in columns, not staggered rows
- **Curved key wells** - Keys follow finger arcs
- **Thumb clusters** - Better use of the strongest digit
- **Full customization** - Every aspect is configurable

## Build Log

### Research & Planning
- Decided on 5x6 layout with 5-key thumb cluster
- Chose which switches (tactile for me)
- Selected keycaps
- Determined controller (Pro Micro or equivalent)

### 3D Printing the Case
Using [[3d-printing]] to create the case:
- Generated STL files using the Dactyl generator
- Printed in PETG for durability
- Multiple iterations to get fit right
- Post-processing (sanding, painting consideration)

### Electronics
- Wiring matrix by hand
- Diodes for each switch
- Controller installation
- TRRS jack for split connection
- USB-C port (if using nice!nano or similar)

### Firmware
Using QMK firmware:
- Custom keymap
- Layers for symbols, numbers, navigation
- Home row mods exploration
- RGB consideration

## Current Status

*(Update as build progresses)*

## Parts List

| Part | Details |
|------|---------|
| Switches | TBD |
| Keycaps | TBD |
| Controller | Pro Micro compatible |
| Diodes | 1N4148 |
| Wire | Enameled copper wire |
| TRRS Jack | For split connection |
| TRRS Cable | Connecting the halves |

## Learning

This project has taught me:
- Basic electronics and hand wiring
- [[3d-printing]] tolerances and design
- Firmware programming
- Touch typing (relearning with new layout!)

## Resources

- Dactyl Manuform generator
- QMK firmware documentation
- r/ErgoMechKeyboards community
- Build guides from others

## Related

- [[maker]] - Maker projects hub
- [[3d-printing]] - Case fabrication
- [[electronics]] - Wiring and controllers
- [[gaming-pc]] - Where I'll use it
