---
name: Colecionero
slug: colecionero
tags: [projects, react, typescript, next, graphql, nhost]
growth: budding
description: Video game collection catalog and backlog tracker
---

# Colecionero

A web app for tracking video game collections built with a friend. The
problem it solves: we both had backlog chaos. Games bought, games started
but abandoned, games finished but not catalogued, wishlists that never
turned into purchases. All of it scattered across Steam, physical shelves,
and memory.

Colecionero is the single place to track all of it: what you own, what
you've played, what you've finished, what you've given up on.

## The Stack Choice

Used [[Nhost]] as the backend: Postgres + Hasura (auto-generated GraphQL) +
Auth out of the box. That meant the frontend could use real-time subscriptions
with Apollo Client from day one, without wiring up any backend code ourselves.

Opening the collections page triggers a subscription. Any change to your
collections from any device shows up instantly. Overkill for a backlog tracker?
Maybe. But it's the kind of thing that's hard to add later and trivial to have
from the start.

PrimeReact for the component library — it covers data-heavy UIs (tables,
dialogs, cards) without much configuration.

## The Stack

- [[Next.js]] + [[React]] + [[GraphQL]]
- Nhost (Postgres + Hasura + Auth)
- Apollo Client with real-time subscriptions
- PrimeReact components

## Current State

Collections CRUD works with auth. The deeper game catalog tracking (platforms,
status per game, play time, ratings) is where the interesting data model lives
and where the backlog started showing. Side project, moving at side-project pace.
