---
name: Teleo
slug: teleo
tags: [react, graphql, node-js]
growth: budding
---

# Teleo

A short contract gig, but an interesting one. Telehealth with a twist.

## The Company

Teleo is a telehealth platform, but unlike the standard "video call with your doctor" setup, they specialize in therapy - including group therapy sessions. Group therapy over video is a completely different beast than one-on-one calls.

## What I Built

I contributed to the launch of their group therapy session framework. This isn't just "Zoom but for therapy" - it's purpose-built for therapeutic contexts.

### Facilitator Controls

The therapist running the session needs controls that regular video conferencing doesn't provide. Managing who can speak, guiding exercises, handling sensitive moments when someone needs extra support - the UX had to support all of this without getting in the way of the actual therapy happening.

### Real-Time Activities

This was the interesting part. Group therapy often involves interactive exercises:
- Collaborative drawing boards
- Guided activities and games
- Shared prompts and reflections

All of this had to work in real-time with multiple participants, staying synchronized while people are also on video. The [[GraphQL]] subscriptions through Hasura made the real-time sync manageable, but getting the UX right for therapeutic contexts required careful thought.

## Tech Stack

- [[React]] on the frontend
- Node.js backend
- Hasura for [[GraphQL]] and real-time subscriptions

## The Challenge

Building software for healthcare - especially mental healthcare - comes with extra considerations. Reliability matters more when someone's having a breakthrough moment in therapy. Privacy and security aren't just checkboxes. The tech has to disappear so the human connection can happen.

## Related

- [[React]] - Frontend framework
- [[GraphQL]] - API layer
- [[Node.js]] - Backend

