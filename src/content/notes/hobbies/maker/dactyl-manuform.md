---
name: Dactyl Manuform
slug: dactyl-manuform
tags:
  - maker
  - keyboard
  - build-log
  - electronics
  - 3d-printing
growth: budding
---

# Dactyl Manuform Keyboard Build

The story of how "maybe I should get a smaller keyboard" turned into learning OpenSCAD, buying a 3D printer, and spending months designing a fully custom split ergonomic keyboard.

## The Rabbit Hole

It started innocently enough. I've had my Corsair K90 (the original, not the newer ones) for about 10 years. 18 macro keys, full layout, rotary volume control - it's a beast and I love it. But it's getting old, and honestly it's a pain to carry around.

So I figured I'd look into something smaller. [[LoadSmart]] had given me a free WASD keyboard back in the day, but I hated it. Brown switches feel mushy to me - I'm a linear guy, used to reds and low-effort keystrokes.

One thing led to another. r/mechanicalkeyboards led to r/ergomechkeyboards, and suddenly I was looking at curved split keyboards and thinking "yeah, I need that."

## Why Dactyl Manuform Specifically

I looked at a bunch of ergo splits - Corne, Lily58, Kyria, and others. The Dactyl Manuform won me over for a few reasons.

First, it's not really a 3D model - it's a code project. The whole thing is parametrically generated. You don't download an STL and print it; you configure a script and it generates exactly what you need. That modularity and customization tickles my engineering brain in all the right ways. It's the same reason I gravitate toward code over no-code tools.

Second, the ergonomics looked genuinely promising. The curved key wells follow your finger arcs, the thumb clusters are actually usable, and the split design lets you position your hands at shoulder width instead of hunched over a single board.

Will it actually make work more comfortable? I don't know yet. There's definitely a learning curve - columnar layouts and thumb clusters require retraining muscle memory. But I'm willing to put in the time to find out. Spending 8+ hours a day typing makes it worth experimenting with.

## The First Attempt

A few years back I actually tried building a Dactyl Manuform. Had a friend print the case on his Ender 3 - the print quality was rough, lots of artifacts, but it worked. I hand-wired the whole thing on an original Pro Micro.

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

### The Print

Matte black filament. 0.08mm layer height - the finest my A1 could do. If I was going to do this, I was going to do it right.

Had a few failures along the way:
- One random layer shift ruined a 20-hour print
- One unstuck from the build plate overnight
- One I reprinted because I changed my mind about a detail

Eventually got both halves printed perfectly.

## Current Status: Waiting on Parts

The cases are done. Now I'm in the AliExpress/Keycapsss waiting game.

### What's Here
- **Printed cases** - matte black, beautiful
- **Switches** - Cherry MX Speed Silvers (like reds but shorter actuation - 1.2mm vs 2mm)
- **Controller** - RP2040 Pro Micro (USB-C) from AliExpress. Way more capable than the old ATmega32U4 ones, and cheap

### What's Incoming
- **Individual switch PCBs** - from Keycapsss. Way cleaner than hand-wiring spaghetti, plus they have LED footprints
- **Per-key RGB LEDs** - upgraded from my original zone lighting plan
- **Keycaps** - blank DSA profile, black and yellow with red accents

### The Color Scheme

Black and yellow to match my desk setup - KRK Rokit Classic 5 monitors and Scarlett Solo interface. The red keycap accents tie it together. Cohesive aesthetic matters when you're staring at something all day.

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
| Layout | 5x6 with custom thumb cluster |
| Switches | Cherry MX Speed Silver |
| Keycaps | Blank DSA - black/yellow/red |
| Controller | RP2040 Pro Micro USB-C |
| LEDs | Per-key RGB (SK6812 mini) |
| OLEDs | Yellow monochrome |
| Extras | Rotary encoder, Nintendo Switch analog sticks |
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

Still no daily driver keyboard though. Waiting on those parts.

## Related

- [[Maker]] - The broader maker hobby
- [[3D Printing]] - The fabrication method (and the printer I bought for this)
- [[Electronics]] - Wiring and components
- [[OpenSCAD]] - The CAD tool I learned for this
- [[Gaming PC]] - Where this will eventually live
