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
That bet paid off - it's been the industry standard ever since, and it's
gotten me every front-end job I've had.

## The Journey

I was doing [[Android]] development at [[Empreguei]] when the web app landed
on my plate in 2016. React was still figuring itself out - mixins, class
components, the whole mess. Watched the ecosystem evolve through HOCs,
render props, and finally hooks. Led a zero-downtime migration from a Django
monolith to modular React at [[LoadSmart]] while hundreds of users depended
on it daily. Built enterprise tooling at [[Enterprise E-Commerce Platform]] from scratch - no existing
frontend, just me and a blank repo.

These days I reach for [[Svelte]] when I can (this site runs on [[SvelteKit]]),
but React is still where most of the work is, and I'm genuinely good at it.

## State Management

I've been through the Redux era. Set up stores, wrote reducers, connected
components. It works, but for most apps it's ceremony for ceremony's sake.

These days I think about state in two buckets: server state and UI state.
Server state is the hard problem - caching, invalidation, optimistic updates.
That's what [[SWR]] or React Query are for. Once you handle async data properly,
the remaining UI state is usually trivial.

For shared client state, I like Zustand. After learning [[Svelte]], I fell in
love with stores - just subscribe to what you need, update when you need to,
no boilerplate. Zustand brings that same simplicity to React.

## Styling

I've done the rounds: [[Styled Components]] at [[Giphy]] and [[LoadSmart]],
[[Tailwind CSS]] at [[LogRock]], and now a custom Less setup at [[Enterprise E-Commerce Platform]]
with their proprietary SSR stack - back to classnames like it's 2015.

They're all fine. CSS modules feel too disconnected from components.
Tailwind is quick but gets verbose - at some point you're just writing
inline styles with extra steps.

My current preference for greenfield: shadcn/ui with a custom registry
for company-wide standards. Good component libraries mean you're mostly
just doing layout, not reinventing buttons. And when the UI library is
comprehensive enough - like the platform's - I don't need to fuss over styling
details and can focus on what actually matters: the data and API layer.

## What I'd Tell a Junior

Learn the fundamentals before the frameworks. Understand why React
re-renders, how the virtual DOM actually works, what a key prop is really
doing. The ecosystem changes every two years, but the mental model stays
the same.

And stop fighting the framework. If something feels hard, you're probably
doing it wrong.
