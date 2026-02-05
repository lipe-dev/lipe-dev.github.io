# Button Sports 3D Printing Project

**Date:** 2026-02-05

## Overview

**Goal:** Expand futebol de botão with 3D printed accessories, plus create a new American football button sport variant.

**Two workstreams:**

1. **Soccer Accessories** - Enhance existing futebol de botão setup with printed pieces that add visual authenticity and gameplay mechanics

2. **American Football Buttons** - New button sport with custom rules adapted for turn-based play, including a field goal mini-game

**Outputs:**
- STL files for all pieces (public, shareable)
- Rules document for American football variant
- Integration with existing 1.8m competition field and Arena Corinthians home setup

**Design Principles:**
- Precision over power (consistent with button football philosophy)
- Authentic proportions where possible
- Printable on Bambu Lab A1 without supports when feasible
- Modular pieces that work together

---

## Soccer Accessories

### Free Kick Barrier (Player Wall)

**Design:** Modular low-poly 3D player figures in the classic "protecting the groin" pose. Each figure snaps to the next, allowing walls of 2-5 players.

**Gameplay mechanic:** Using players in the barrier costs you field presence. 3 players in wall = 3 of your buttons sit out for the next X turns. Makes barriers a tactical decision, not free defense.

**Print specs:**
- Individual figures, snap-fit connectors on sides
- Height proportional to button size (slightly taller than a vidrilha)
- Flat base for stability

### Substitutes Bench / Dugout

**Design:** A bench or dugout-style holder for reserve buttons. Displays your subs while keeping them organized.

**Options:**
- Simple bench with slots for X buttons
- Covered dugout with roof (more authentic, more print time)
- Angled display so you can see the button artwork

**Print specs:**
- Sized for vidrilha diameter (45mm or 55mm)
- Flat bottom, stable on table edge

### Referee Figure

**Design:** Low-poly referee in classic pose. For aesthetic completeness and dramatic foul calls.

**Print specs:**
- Similar height/style to barrier players for visual consistency
- Flat base

### Coach Figurine

**Design:** Two variants:
- **Calm pose** - Arms crossed, watching
- **Angry pose** - Screaming at the referee, arms up

**Print specs:**
- Same style as referee and barrier players
- Could include a tiny bench for the coach to stand near

### Corner Flags

**Design:** Tiny flags on posts. Pure aesthetic, no gameplay function.

**Print specs:**
- Single piece, flag and pole together
- Weighted or wide base to prevent tipping

### Storage / Display Case

**Design:** Case that holds a full team of buttons, displays the artwork when not playing. Could double as transport for Santana tournaments.

**Print specs:**
- Grid of circular slots matching vidrilha size
- Lid optional
- Maybe team name/logo slot on front

### Scoreboard (Maybe)

**Design:** Manual flip numbers or sliding markers. Low priority since existing field doesn't have one.

---

## American Football - Field Goal Mini-Game

The simple version. No complex rules, just satisfying kicks.

### Components

**Uprights (Goal Posts)**
- NFL proportions scaled to 1.8m field
- Crossbar + two vertical posts + base
- Sturdy enough to survive missed kicks hitting them

**Ball (Shape TBD)**
- Needs to lift off the table for field goals
- Disc shape doesn't lift well with button flicks
- Requires physical experimentation (see Ball Shape section below)

### Gameplay

Place the ball. Flick it. Did it go through the uprights? That's the whole game.

**Optional difficulty scaling:**
- Move ball further back for longer field goals
- Add a "rush" button that blocks if kick trajectory is too low

---

## American Football - Full Game Rules

Turn-based button football adapted for American football.

### Core Concepts

| Term | Meaning |
|------|---------|
| Yard line | Field markings every 10 yards. Ball cannot pass the next line in one play. |
| Touchdown | Ball crosses end zone. 6 points. |
| Field goal | Kick through uprights. 3 points. |

### Simplified Downs

**One play per yard line.** Reach the next line = keep going. Fail = turnover.

This means:
- Every play matters
- Faster game pace
- No down tracking needed
- Field position becomes critical

### Turn Structure

**Offense turn (3 actions):**

1. **Ball carrier flick** - Flick the player with the ball once
   - Can run (ball moves with player)
   - Can pass (flick ball toward teammate, must touch them to complete)

2. **Blocker flick #1** - Flick a teammate to position as blocker

3. **Blocker flick #2** - Flick another teammate to block

**Defense turn (2-3 actions, needs playtesting):**

- Flick defenders trying to touch the ball
- Cannot intentionally hit players
- If a defender hits a player instead of the ball = blocked (flick wasted)

**Turn repeats** until:
- Ball reaches the next yard line (keep going)
- Ball fails to reach yard line after offense turn (turnover)
- Turnover occurs

### Possession & Turnovers

| Situation | Result |
|-----------|--------|
| Ball touches offensive player | Possession maintained (pass complete) |
| Ball touches defensive player during offense turn | Tackle / turnover |
| Ball crosses next yard line | Fumble, loose ball |
| Defense touches the ball | Turnover |
| Ball goes out of bounds | Reset at that spot, turnover |

**Key principle:** Both offense and defense must touch the ball, not players. Mirrors soccer's foul elegance.

### Scoring

| Score | Points | How |
|-------|--------|-----|
| Touchdown | 6 | Ball crosses end zone line |
| Field goal | 3 | Kick through uprights (mini-game) |
| Extra point | 1 | Field goal after touchdown |
| Two-point conversion | 2 | One play from close range after touchdown |

**End zone rule:** Final yard line before end zone is the "red zone." From there, you can attempt to score on your turn if you get past the defense.

### Physical Components

| Component | Description |
|-----------|-------------|
| Disc-pigskin | For running/passing gameplay |
| Liftable ball | For field goals (shape TBD) |
| Uprights | NFL-proportioned goal posts |
| Yard line markers | If playing on soccer field, need removable markers |

**Note:** Can use existing buttons as players. No need for special American football buttons unless you want themed teams later.

---

## Ball Shape - Open Question

**The tension:**
- Running/passing gameplay wants a disc (predictable, controlled)
- Field goals want something that lifts (needs to clear the crossbar)

**Options to test:**
1. **Two different balls** - Disc-pigskin for gameplay, rounder ball for kicks
2. **Hybrid shape** - Disc with a slight dome/curve on bottom that lets it ramp up on hard flicks
3. **Angled tee** - Flat disc but a tee that props it at an angle for field goals
4. **Thicker disc with beveled edge** - Might catch air if struck right

This needs physical experimentation with printed prototypes.

---

## Print Priority

**Phase 1 - Quick wins:**
- Corner flags (tiny, fast print)
- Ball prototypes (small, needed to playtest)
- Referee figure

**Phase 2 - Core gameplay:**
- Free kick barrier (modular players)
- Uprights
- Coach figurines

**Phase 3 - Storage & display:**
- Substitutes bench
- Team display case
- Scoreboard (maybe)

---

## Next Steps

1. Playtest American football rules with makeshift pieces
2. Experiment with ball shapes for field goals
3. Iterate on defensive flick count (2 vs 3)
4. Design STLs starting with Phase 1
5. Share files publicly when ready
