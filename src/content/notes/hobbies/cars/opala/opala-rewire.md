---
name: Opala Rewire
slug: opala-rewire
tags:
  - cars
  - projects
  - electronics
  - restoration
growth: budding
---

# Opala Rewire

The full rewire of [[Opala Diplomata]] (aka Apagão). The original harness is almost 40 years old, so I'm not recovering any of it. New harness from scratch, built for what the car will become: a heavy sound system, a TV in the trunk, an inverter for the PlayStation, and power seats from a Ford Focus.

It's also the path to the title transfer inspection. No legal car without wiring I trust.

## The Method

One circuit at a time. Pull the wire, build it, test it with a multimeter, close it up, move to the next one. The order is grouped by what each step unlocks:

1. **The car runs:** main power (battery, 100A fuse, 35mm² cable, bus bars, grounds), post key, starter, ignition, alternator and charging.
2. **The car gets legal:** headlights, tail and plate lights, brake lights, turn signals and hazards, reverse, horn, wipers and washer.
3. **The car talks to me:** gauges and dash lighting, warning lights, temperature, oil pressure, fuel level, tachometer.
4. **The car is comfortable:** power windows, locks, defroster, ventilation, A/C and electric fan, radio, interior lights, fog lights, the Focus power seats, the second battery, inverter and TV.

Physically, it goes dash and fuse box first, then the engine bay, then the rear and doors last.

## Key Decisions

### Relays only where they're needed

A relay goes in for high current, a weak original switch, or a long wire run. Small loads get a fuse and the original switch. That works out to 10 relays, with 6 spare slots.

The relays: post key, starter, ignition coil, low beam, high beam, horn, defroster, power windows, electric fan, and fog lights.

### The fuse box

A 24 fuse, 16 relay box from AliExpress, 290 × 123 × 78mm. I originally looked at modular MTA relay bases, but this box does everything in one place. Bought it without relays so I only buy what the project actually needs. It arrived on October 26, 2026.

There's no internal bus in it: every fuse and relay pin gets a crimped female spade terminal. So a copper bus bar (rated 195A) goes inside for +12V, and another for ground on the opposite side.

### Post key by relay

The ignition switch doesn't carry any real current anymore. It only fires the coil of a post key relay, and that relay feeds everything that should only work with the key on. All post key wiring is yellow.

One exception: the ignition coil relay is triggered directly by the key's ON wire, not through the post key bus. A short somewhere on the post key side won't kill the engine.

Headlights, tail lights, hazards and brake lights work with the key off.

### Two batteries

The main battery handles starting and the car. A deep cycle auxiliary battery feeds the sound system, TV and inverter, connected through an automatic isolator. The alternator goes up to 100 to 120A to keep up with all of it.

### Fuse smaller than the cable

Early on, an AI chat suggested 6 or 10mm² cable with a 60 to 150A main fuse. That's how you set a car on fire: the fuse has to be smaller than what the cable can handle, or the cable cooks before the fuse blows. 6mm² handles around 40 to 50A, 10mm² around 60 to 70A. The real setup uses 35mm² from the battery with a 100A fuse, and 50mm² for the starter and main grounds.

## Circuits Designed So Far

### Starter and ignition

Battery to a MIDI fuse to the +12V bar, then four independent fuses: ignition switch (5A), post key (25A), starter (30A) and coil (10A). The key in ON triggers the post key relay, in START it triggers the starter relay, which signals the solenoid.

The thick starter cable goes straight from the battery to the starter, no fuse. It pulls too much current to go through the box, so it needs to be short, well secured and protected from rubbing along its whole path.

### Headlights

The headlight switch doesn't carry bulb current either. It sends a signal to one relay per beam, and each relay gets its own 15A fuse straight from the bar. Two H4 bulbs pull around 9 to 10A per beam, on 2.5mm² wire. The original H4 connectors and switch plugs are staying, just with new terminals.

## Engine Bay Layout

Fuse box in the corner by the firewall, on the same side as the battery. Starter and coil on that side too. Alternator at the front of the engine on the opposite side. The idea is to keep every cable hidden along the edges of the engine bay, with the box mounted lid up and wires entering from below with a drip loop.

## Still Open

- Alternator model, bracket, pulley and belt
- Isolator model and where the auxiliary battery goes (probably the trunk)
- Gauge and cable size for the inverter line (a 1000W inverter pulls around 100A at 12V)
- Separate relays for left and right headlights?
- Whether the headlight switch should be fed from the post key relay or its own fuse
- Ballast resistor or bypass on the ignition coil
- Drawing the rest of the circuits: charging, tail lights, brakes and turn signals, wipers, and the dual battery setup

## Related

- [[Opala Diplomata]]
- [[Electronics]]
- [[Car Audio]]
- [[Cars]]
