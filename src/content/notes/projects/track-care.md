---
name: Track-Care
slug: track-care
tags: [projects, php, hackathon]
growth: budding
description: Elderly care app with medication tracking and geofencing
---

# Track-Care

A hackathon project for elderly care: medication reminders and geofencing to
keep track of family members who might wander. Built at [[UNIFEI]] across two
weekends.

## The Hackathon

Two-phase event. First weekend in São Paulo at Samsung's office for ideation.
Second weekend back at UNIFEI for development. We built the whole thing in
that timeframe.

## The Features

- **Medication tracking** with customizable reminder times
- **Virtual fencing** - draw boundaries on a map, get alerts when the person
  leaves the safe zone
- **Family dashboard** for monitoring

The idea was simple: help families keep track of elderly relatives with
cognitive decline. Know when grandma forgets her meds. Know when grandpa
wanders out of the house.

## The Tech

Built on [[COBORFF]], my PHP boilerplate from that era. CodeIgniter + Bootstrap +
REST API + Facebook auth. I'd done enough projects with that stack that I
made a reusable starter. Some PHP blogger even linked it in tutorials, which
was nice.

Google Maps integration for the geofencing. Database-driven polygon storage
for the safe zones.

## The Judges Were Wrong

We got discouraged by judges who said the form factor was impossible. "You
can't make this practical for elderly people to carry around."

We had a working prototype in a 5x5 cm cube. I was convinced that with proper
engineering we could shrink it to watch size.

A few years later, everyone has smartwatches and AirTags. The technology
caught up to what we were trying to build in a university hackathon. We were
just early.

## What Happened

Never launched. The judge feedback killed our momentum. In retrospect, we
should have pushed forward anyway. The validation came eventually - just from
Apple and Samsung instead of us.

Lesson learned: don't let people who can't see the future tell you what's
possible.
