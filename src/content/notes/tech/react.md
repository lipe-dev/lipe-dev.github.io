---
name: React
slug: react
tags: [tech]
growth: budding
---

# React

My primary framework for a decade now. First heard about it at Front in BH
back in 2015 when everyone was still betting on Angular. Something clicked,
and when we needed to build the web UI for [[Empreguei]], I pushed for React.
That bet paid off. It's been the industry standard ever since, and it's
gotten me every front-end job I've had.

## The Journey

I was doing [[Android]] development at [[Empreguei]] when the web app landed
on my plate in 2016. React was still figuring itself out: mixins, class
components, the whole mess. Watched the ecosystem evolve through HOCs,
render props, and finally hooks. Led a zero-downtime migration from a Django
monolith to modular React at [[LoadSmart]] while hundreds of users depended
on it daily. Built enterprise tooling at [[Enterprise E-Commerce Platform]] from scratch (no existing
frontend, just me and a blank repo).

These days I reach for [[Svelte]] when I can (this site runs on [[SvelteKit]]),
but React is still where most of the work is, and I'm genuinely good at it.

## React 19 and Server Components

I like the direction. Server Components feel like PHP, and I mean that
positively. Fetch data on the server where it's faster, build the component
with familiar syntax and shared components, ship static HTML when that's all
you need.

The mental model shift is real, but it makes sense once it clicks.

## State Management

I've been through the Redux era. Set up stores, wrote reducers, connected
components. It works, but for most apps it's ceremony for ceremony's sake.

These days I think about state in two buckets: server state and UI state.
Server state is the hard problem: caching, invalidation, optimistic updates.
That's what [[SWR]] or React Query are for. Once you handle async data properly,
the remaining UI state is usually trivial.

For shared client state, I like Zustand. After learning [[Svelte]], I fell in
love with stores. Just subscribe to what you need, update when you need to,
no boilerplate. Zustand brings that same simplicity to React.

## Styling

I've done the rounds: [[Styled Components]] at [[Giphy]] and [[LoadSmart]],
[[Tailwind CSS]] at [[LogRock]], and now a custom Less setup at [[Enterprise E-Commerce Platform]]
with their proprietary SSR stack. Back to classnames like it's 2015.

They're all fine. CSS modules feel too disconnected from components.
Tailwind is quick but gets verbose. At some point you're just writing
inline styles with extra steps.

My current preference for greenfield: shadcn/ui with a custom registry
for company-wide standards. Good component libraries mean you're mostly
just doing layout, not reinventing buttons. And when the UI library is
comprehensive enough - like the platform's - I don't need to fuss over styling
details, freeing me to focus on what actually matters: the data and API layer.

## Underrated Patterns

### Reducers for Complex State

People add five separate `useState` calls when a reducer would make more
sense. I see "step" state variables tracking wizard progress when a clean
finite state machine would handle the transitions, validation, and edge cases
properly.

If you're tracking related pieces of state that change together, reach for
`useReducer` or a proper state machine library.

### The 4 API Files Pattern

My own pattern for organizing API layers. See [[Four API Files Pattern]] for
the full breakdown.

Short version: under `/api`, create paths that mirror your backends. Each
path gets four files: `client.ts`, `server.ts`, `types.ts`, `hooks.ts`.
Completely decoupled, predictable structure, easy to navigate.

## What I'd Tell a Junior

Learn the fundamentals before the frameworks. Understand why React
re-renders, how the virtual DOM actually works, what a key prop is really
doing. The ecosystem changes every two years, but the mental model stays
the same.

And stop fighting the framework. If something feels hard, you're probably
doing it wrong.
