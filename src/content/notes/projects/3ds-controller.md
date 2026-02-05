---
name: 3DS Controller Adapter
slug: 3ds-controller
tags: [projects, hardware, arduino]
growth: seedling
description: Arduino adapter for external controllers on Nintendo 3DS
---

# 3DS Controller Adapter

An Arduino-based adapter to connect GameCube and PS2 controllers to a
Nintendo 3DS. Part of a larger dream: consolize the handheld with external
controls and a capture card.

## The Build

My first hardware project that actually did something cool. The 3DS wasn't
designed for external input, so making it work required:

- **Arduino Pro Micro** as the brain
- **16-channel multiplexer** for pin expansion (3DS needs 19+ inputs)
- **Logic level converters** (GameCube is 3.3V, Arduino is 5V, 3DS analog wants 0-1.3V)
- **RC low-pass filters** to convert digital PWM signals to analog voltages

That last part was the fun puzzle. Arduino can't output true analog, so I
built little DACs from capacitors and resistors. Watching the math actually
work on an oscilloscope was satisfying.

## The Breadboard Lesson

Posted on r/arduino asking why nothing was working. Turns out I didn't know
the power rails on breadboards have a gap in the middle - they're not
connected all the way across. Classic first-timer mistake. Hardware has
different failure modes than software.

## Current State

Abandoned WIP. It worked - controlling a 3DS with a GameCube controller felt
great - but the wiring was a mess and I moved on to other projects.

If I revisit this, I'd probably use a [[BlueRetro]] adapter instead of
building from scratch. Same outcome, less soldering, any Bluetooth controller.

## What I Learned

Hardware debugging is a different beast. When something doesn't work, you're
checking voltages with a multimeter, not reading stack traces. I liked it.

---

## Dev Log

### July 28, 2022 - Initial Decisions

Just installed PicoBoot on my GameCube and got inspired. Next project: my 3DS.
Want to install a capture card AND external controller support.

To my dismay, there's no such mod anymore. Loopy used to make and sell one,
but he's been out of the market for a while. Time to build my own.

**Guiding principles:**
- Must be open source (don't want this to die with me)
- Must use readily available parts (no custom chips)
- For and by everyone

**Initial decisions:**
- Arduino Pro Micro: cheap, available, easy to work with
- Support GameCube controllers (Smash fans) and PS2 controllers (enough buttons for New 3DS)
- External "converter box" for now - fitting inside the 3DS can come later

### July 29, 2022 - Not Enough Pins

The Pro Micro doesn't have enough pins. The 3DS needs:

```
D-PAD (4) + ABXY (4) + L/R (2) + ZL/ZR (2) +
CIRCLE PAD X/Y (2) + C-STICK X/Y (2) + START/SELECT/HOME (3) = 19 pins
```

Plus input pins for the controller. Solution: 16-channel multiplexer. Very
cheap, adds cents to the project.

Found [dekuNukem/gc3ds](https://github.com/dekuNukem/gc3ds) with valuable info
about what the 3DS expects. Circle Pad outputs 0-1.3V. Not sure Arduino analog
pins can do that.

### August 9, 2022 - Parts Shopping in São Paulo

Traveling with my wife for her job. São Paulo has Santa Ifigênia, a whole
neighborhood of electronics stores. Picked up:

- Logic level converter (GC 3.3V → Arduino 5V)
- 16-channel multiplexer
- Breadboard and jumper wires
- Capacitors and resistors for DIY DACs
- 3.3V voltage regulator

**Research note:** Arduino "analog" pins are actually PWM. For 50% power,
it's not 2.5V - it's 5V switching on/off very fast. Need RC low-pass filters
to smooth it into actual analog voltages.

### August 11, 2022 - First Milestone: Reading GameCube Inputs!

Finally reading inputs from the controller!

The Pro Micro doesn't have 3.3V output, so I needed a voltage regulator for
the logic level converter's reference voltage.

But for two days, nothing worked. Tried new Pro Micro, new wires, rebuilt
everything. Posted on GitHub issues, then Reddit.

**The stupid mistake:** breadboard power rails aren't connected all the way
through. A couple jumpers fixed it.

First working prototype is a complete mess of wires. But it's a mess that
does something.

### August 27, 2022 - First Commands Sent to 3DS!

We did it. Soldered wires for D-Pad and ABXY buttons. The Arduino reads
GameCube input and sends it to the 3DS. Words can't express how happy I am.

**Next steps (never completed):**
- Wire all inputs
- Add Bluetooth receiver support
- Figure out New 3DS button mapping
- Make automated bots/macros

Let's fucking go! (Then life happened and I moved on to other projects.)
