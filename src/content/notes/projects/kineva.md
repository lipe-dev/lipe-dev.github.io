---
name: Kineva
slug: kineva
tags: [projects, react, typescript, next, supabase, tailwind-css]
growth: budding
description: Healthcare patient management platform for physical therapy practices
---

# Kineva

Patient management software for my wife's physical therapy practice. She was
tracking patients in spreadsheets and notebooks. Appointment history scattered
across WhatsApp threads. Treatment progress in her head. It wasn't sustainable.

So I'm building her something better. A place to track patients, their
guardians (many of her patients are children), treatment notes, and progress
over time. Multi-tenant so her colleagues can use it too, each with their own
isolated patient data.

The name comes from "Kinesis" (movement) and "Eva" (life). Physical therapy
is about restoring movement to life.

## The Engineering Challenges

### Multi-Tenant from Day One

Each practitioner needs their own isolated patient data. I didn't want to
retrofit multi-tenancy later, so the org model was built in from the start.

Every patient belongs to an organization. Every query filters by org. URL
routing includes the org slug. Row-level security policies in the database
enforce isolation even if the application code has bugs. Defense in depth.

### The Guardian Problem

Physical therapy practices see a lot of children. Children have guardians.
Sometimes the guardian is also a patient. Sometimes one guardian has multiple
children in treatment.

The data model handles this with a self-referential relationship - a patient
can reference another patient as their guardian. Deleting a guardian prompts
for confirmation if they have dependents, preventing orphaned records.

### Passwordless Auth

Nobody wants another password. Magic links via [[Supabase]] Auth: enter your
email, click the link, you're in. OAuth for Google and Facebook as fallbacks.
The authentication flow was one of the first things I built because it
touches everything else.

### 41 Themes

Maybe overkill for an MVP, but I wanted the app to feel personal. Practitioners
spend hours in this interface. Let them pick a color scheme that doesn't hurt
their eyes. The theme system uses CSS custom properties with server-side
loading for SSR compatibility.

## Current State

Active development. Patient CRUD works, authentication works, org management
works, themes work. Next up: treatment session tracking, progress notes,
appointment history. The foundation is solid, now it's about building the
features my wife actually needs day-to-day.

## Stack

- [[Next.js]] 15 + [[React]] 19 + [[TypeScript]]
- [[Supabase]] (Postgres + Auth + Row-Level Security)
- [[Tailwind CSS]] 4
- [[Zod]] for schema validation
- Zustand for client state
- React Hook Form

## Why I'm Building This

My wife is a physical therapist. Her patient tracking was spreadsheets and
memory. This solves her problem first. If it works for her practice, maybe
it works for others. But the primary user is sitting across the dinner table,
which means I get immediate feedback on every decision.
