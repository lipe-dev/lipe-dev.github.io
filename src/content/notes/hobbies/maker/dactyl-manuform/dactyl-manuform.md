---
name: Dactyl Manuform
slug: dactyl-manuform
tags:
  - maker
  - keyboard
  - build-log
  - electronics
  - 3d-printing
  - projects
growth: budding
---

# Dactyl Manuform Keyboard Build

The story of how "maybe I should get a smaller keyboard" turned into learning OpenSCAD, buying a 3D printer, and spending months designing a fully custom split ergonomic keyboard.

## The Rabbit Hole

It started innocently enough. I've had my Corsair K90 (the original, not the newer ones) for about 10 years. 18 macro keys, full layout, rotary volume control. It's a beast and I love it. But it's getting old, and honestly it's a pain to carry around.

So I figured I'd look into something smaller. [[LoadSmart]] had given me a free WASD keyboard back in the day, but I hated it. Brown switches feel mushy to me. I'm a linear guy, used to reds and low-effort keystrokes.

One thing led to another. r/mechanicalkeyboards led to r/ergomechkeyboards, and suddenly I was looking at curved split keyboards and thinking "yeah, I need that."

## Why Dactyl Manuform Specifically

I looked at a bunch of ergo splits: Corne, Lily58, Kyria, and others. The Dactyl Manuform won me over for a few reasons.

First, it's not really a 3D model. It's a code project. The whole thing is parametrically generated. You don't download an STL and print it; you configure a script and it generates exactly what you need. That modularity and customization tickles my engineering brain in all the right ways. It's the same reason I gravitate toward code over no-code tools.

Second, the ergonomics looked genuinely promising. The curved key wells follow your finger arcs, the thumb clusters are actually usable, and the split design lets you position your hands at shoulder width instead of hunched over a single board.

Will it actually make work more comfortable? I don't know yet. There's definitely a learning curve. Columnar layouts and thumb clusters require retraining muscle memory. But I'm willing to put in the time to find out. Spending 8+ hours a day typing makes it worth experimenting with.

## The First Attempt

A few years back I actually tried building a Dactyl Manuform. Had a friend print the case on his Ender 3. The print quality was rough, lots of artifacts, but it worked. I hand-wired the whole thing on an original Pro Micro.

I never actually daily drove it. The jankiness was too much, and I think deep down I knew I wanted to do it properly.

## Version 2: Doing It Right

This time I went all in.

### Custom Generation

The web-based Dactyl generators are fine, but I found out the Python scripts could do OLED screens. That was enough to push me into the deep end.

Two weeks of tweaking parameters. Column heights adjusted to my finger lengths. Thumb cluster angles dialed in. Every measurement considered.

Then I opened [[OpenSCAD]].

### OpenSCAD Mods

The base generated model wasn't enough. I added:
- **Custom OLED housing** - designed from scratch to fit the displays I wanted
- **Rotary encoder mount** - because volume control on the K90 spoiled me
- **Nintendo Switch analog sticks** - replacing thumb keys for mouse/scroll control

Learning OpenSCAD was its own adventure, but now I use it for all kinds of projects. The parametric modeling approach clicks with my programmer brain.

### "I'll Just Use a Print Farm"

That was the plan. Generate the files, send them off, get nice prints back.

Instead I bought a [[Bambu Lab A1]].

The logic made sense at the time. Why pay someone else when I could own the printer and make whatever I want? Classic maker brain.

![First calibration run, wife photobombing in the background](../bambu-lab-a1/first-calibration.jpg)

### The Print

Matte black filament. 0.08mm layer height, the finest my A1 could do. If I was going to do this, I was going to do it right.

Had a few failures along the way:
- One random layer shift ruined a 20-hour print
- One unstuck from the build plate overnight
- One I reprinted because I changed my mind about a detail

Eventually got both halves printed perfectly.

## Current Status: One Half Wired

First half is fully wired. Second half still to go, then firmware.

### The Color Scheme

Black and yellow to match my desk setup: KRK Rokit Classic 5 monitors and Scarlett Solo interface. The red keycap accents tie it together. Cohesive aesthetic matters when you're staring at something all day.

## Planned Features

### OLEDs
Simple yellow monochrome displays showing:
- Current layer
- Caps lock status
- Maybe Bongo Cat or Luna dog, because it's basically mandatory at this point

### Analog Sticks
Honestly not 100% sure what I'll use them for yet. Probably mouse movement and scrolling most of the time. Maybe gaming if I'm feeling stupid.

### Rotary Encoder
Volume control. Some things you don't give up.

## Parts List

| Part | Details |
|------|---------|
| Layout | 31 keys per half — 4×6 main body + extra keys + thumb cluster |
| Wiring matrix | 6×6 per half |
| Switches | Cherry MX Speed Silver |
| Keycaps | Blank DSA - black/yellow/red |
| Controller | RP2040 Pro Micro USB-C |
| LEDs | Per-key RGB (SK6812 mini) |
| OLED | 1 yellow monochrome per hand |
| Rotary encoder | 1 per hand, with push button |
| Analog stick | 1 Nintendo Switch stick per hand, with push button (L3) |
| Case | Custom OpenSCAD design, matte black, 0.08mm layers |

## What I Learned

This project taught me way more than just keyboard building:
- **OpenSCAD** - Parametric modeling that I now use everywhere
- **[[3D Printing]]** - Which led to buying my own printer
- **[[Electronics]]** - Hand-wiring, understanding matrix scanning
- **Patience** - AliExpress shipping times test a man's soul

## The Irony

I started this because I wanted something smaller and more portable than my K90.

I now have a full [[3D Printing]] setup, a custom-designed split keyboard with OLED screens and analog sticks, and several months invested in the project.

Still no daily driver keyboard though. Parts are here now, so the excuse is gone.

## Build Log

### Stage 1: Design and Generation — Done

Two weeks of tweaking `generate_configuration_mklasklasd.py`. Column offsets tuned to my finger lengths, thumb cluster angles dialed in, OLED clip mount configured, EXTERNAL controller tray for the RP2040. Generated the OpenSCAD files, added the custom OLED housing and encoder mount on top.

### Stage 2: Printing — Done

Both halves printed in matte black at 0.08mm layer height on the [[Bambu Lab A1]]. Three failed attempts before clean results: one layer shift, one adhesion failure overnight, one deliberate reprint after changing a detail.

![First look at the printed half](print-first-look.jpg)

The support material situation was something else. The curves and overhangs that make the ergonomics work are exactly the kind of geometry that requires a lot of support.

![Support material still inside](print-support-inside.jpg)

![The aftermath](print-support-removed.jpg)

![That was a lot of support material](print-support-pile.jpg)

The custom parts (analog stick holders, rotary encoder mount, OLED enclosures) went through many more iterations than the photo suggests. Most test prints went straight to the bin. The ones that survived long enough to be photographed got claimed by my daughter as toys.

![Custom parts iterations](print-custom-parts-iterations.jpg)

Also printed a custom holder for the RP2040 controller with a dedicated slot for the TRRS jack.

![Controller board holder with TRRS slot](controller-holder.jpg)

### Stage 3: Parts — Done

Everything arrived. Cherry MX Speed Silvers, RP2040 Pro Micro, individual switch PCBs from Keycapsss, SK6812 mini per-key RGB LEDs, blank DSA keycaps in black and yellow with red accents.

### Stage 4: Assembly — In Progress

Both halves test-fitted with switches, OLED screens, and rotary encoder just to see how it all looks:

![First look with switches and screens inserted](assembly-first-look.jpg)

#### Soldering (first half)

Soldered the individual PCBs to the switches first, then populated the rest. In hindsight, fully assembling the switches into the case before soldering would have been easier.

![PCBs soldered to switches](solder-pcbs-to-switches.jpg)

Then the diodes on each PCB:

![Diodes soldered](solder-diodes.jpg)

Then the LEDs. Four solder points each, one per key, across both halves. A lot of work.

![LEDs soldered](solder-leds.jpg)

#### Wiring

The scrapped diode legs got a second life as row/column bridges between PCBs. Zero waste.

![Diode legs prepped as bridges](solder-diode-leg-bridges.jpg)

Went with bare copper wire for the bridges instead of insulated wire. No practical reason, it just looks like exposed piping and that's cool.

![Final wiring with bare copper bridges](wiring-final.jpg)

The thumb cluster area got tight. The geometry is awkward and the wiring had to get creative.

![Thumb cluster wiring chaos](wiring-thumb-cluster.jpg)

But from the front it looks clean:

![Clean from the front](wiring-clean.jpg)

#### Wiring Matrix

The electrical matrix is 6 rows × 6 columns per half. It doesn't map 1:1 to the physical layout:

- **Rows 1–4:** 6 keys each, the main curved key well
- **Row 5:** the 2 extra keys from the middle columns plus 2 thumb cluster keys
- **Row 6:** the remaining 3 thumb cluster keys. The rotary encoder push button and the Nintendo Switch analog stick L3 will wire into this row as well

![Row x col wiring diagram](image.png)

### Stage 5: Wire Second Half — Up Next

Same process as the first. Then firmware.

### Stage 6: Firmware — Pending

Flash QMK on both halves, configure the 6×6 matrix, set up the OLED displays, encoder, and analog sticks.

## Related

- [[Maker]] - The broader maker hobby
- [[3D Printing]] - The fabrication method (and the printer I bought for this)
- [[Electronics]] - Wiring and components
- [[OpenSCAD]] - The CAD tool I learned for this
- [[Gaming PC]] - Where this will eventually live
