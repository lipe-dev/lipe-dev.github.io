---
name: React
slug: react
tags: [tech]
growth: evergreen
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

## The Evolution

Going from classes to functions was the biggest mental shift for me, but it
made a lot of sense. I like the pure function approach: props and state go
in, UI goes out. That's exactly the mental model for React anyway.

Hooks the way I see it are just extra input sources, making data come in
sideways or from user input. It adds some complexity, but it's still simpler
than class-based stuff and all the `this` caveats. Net positive.

Server Components feel like regular function components to me. We've been
doing this in extra-official ways for years with server-side rendering, so
it's nice to have a unified API now. Fetch data on the server where it's
faster, build the component with familiar syntax, ship static HTML when
that's all you need.

## React Compiler

The [React Compiler](https://react.dev/learn/react-compiler) shipped stable
in late 2025. It automatically memoizes at build time, so you stop thinking
about useMemo/useCallback entirely.

I have mixed feelings. On one side, it definitely helps. On the other, it
makes the code less explicit about what it does. Some magic memoization may
or may not happen somewhere without you telling it to. I'm afraid this could
cause people to lose control of their code and lessen their depth of
understanding.

The generation learning React with the compiler on by default won't build
the mental model of "why does this re-render?" because they'll never have
to. Good for shipping, questionable for depth. Same tension as any "magic"
abstraction. Rails had it, ORMs have it, now React has it.

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

## Testing Philosophy

Controversial opinion: testing simple components, especially visual ones, is
just code coverage inflation and metrics gaming. I find e2e tests with
[[Playwright]] that actually use whole features infinitely more valuable.

Unit tests are for functions with specific purposes. A function that takes
an object and transforms it into something else? Unit test that. A card
component that renders props and has a dropdown? That's asking for annoyance
with portals during unit tests. Better to test it with e2e where you see
real API data loading, actual timings, real interactivity.

No mocking the world. If the test passes, the feature works.

## Memoization

Don't wrap everything "just in case." You're adding memoization overhead
where it won't even bring benefits. I memoize heavier operations, API
results, and callbacks that depend on multiple state variables (prevents
stale closure bugs).

That said, the React Compiler is making this whole discussion legacy
knowledge. New projects with the compiler enabled won't need manual
memoization at all.

## Custom Hooks

API hooks always look the same: data, loading, error, refresh. Whether I
build them on top of SWR or TanStack Query, the interface is consistent.

For common utilities, I just install usehooks-ts. useDebounce, useTimeout,
useBoolean. No point reinventing these for the hundredth time.

For truly custom reusable hooks, I share them via a shadcn registry alongside
any custom components. Keeps related code together.

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

## When to Use React (and When Not To)

I reach for React when: the team already uses it, I need to make the project
easier to hire for, or the project requires integrating with tools that
support React really well. The hiring angle is underrated. "We chose X
because we can actually find people who know it" is a legitimate technical
decision.

I reach for [[Svelte]] when I need deeper integration with the actual DOM
and vanilla JS libraries but still want a reactive framework. React's
abstraction layer is great until you need to break through it.

## Common Mistakes I See

**Prop drilling API data.** The whole point of SWR or React Query is that
you can call the same hook in five components and they share the cache. If
you're passing API data through three layers of props, you've missed the
point.

**Over-polymorphic components.** A Button with 15 boolean props that change
its behavior when you could just have Button, IconButton, and LinkButton.
Composition over configuration. Make multiple components and use the ones
you need instead of one component that tries to do everything.

## What Separates Seniors from Juniors

**Architectural intuition.** A senior can grasp the overall architecture
just from looking at the code. They build clean components that integrate
easily anywhere. They play the 4D chess of predicting all the ways a
component can and will be used.

**Confident deletion.** Seniors aren't afraid of the jenga tower falling.
They understand the codebase well enough to rip out dead code without
flinching. Juniors are scared to remove anything because they don't
understand the blast radius.

**Debugging intuition.** Seniors can mentally trace a bug through the
component tree. They know where to look before opening devtools.

**Knowing when NOT to.** Not everything needs a custom hook. Not everything
needs context. Not every piece of state needs to be lifted. Juniors reach
for patterns they just learned. Seniors know when a pattern is overkill.

**Error states and edge cases.** Juniors build the happy path. Seniors ask
"what if the API fails? what if this is empty? what if the user double-clicks?"
They build defensively without being told to.

**CSS mastery.** I'll say it: real seniors master CSS. I don't understand
why people feel like it's a merit to say they don't understand CSS. It's not
that hard, and if you want to build UI it's the bare minimum. Tailwind was
supposed to solve CSS but I still fix UI issues constantly because people
throw classes at the wall to see what sticks. I often solve styling issues
by deleting everything and adding two classes.

**Semantic HTML.** Seniority shows in something as simple as HTML structure.
Seniors can make a full page that looks decent just by using the right tags.
I see juniors doing divs within divs, then styling text, then styling divs
to look like buttons, when just using the proper tags gets you halfway there.
Semantic HTML makes pages easier to test, ready for accessibility audits,
and easier to style. A button should be a `<button>`. Navigation should be
a `<nav>`. It's not complicated, but it requires knowing the basics exist.

**Asking first.** If I give a task "find X in this array," a junior who
knows the language will go straight to `arr.find()`. A senior will ask
"what do we know about this array?" Is it sorted? How big is the dataset?
Can we search at the database level instead? The right solution depends on
context that isn't in the ticket.

## What I'd Tell a Junior

Learn the fundamentals before the frameworks. Understand why React
re-renders, how the virtual DOM actually works, what a key prop is really
doing. The ecosystem changes every two years, but the mental model stays
the same.

And stop fighting the framework. If something feels hard, you're probably
doing it wrong.

Master CSS. It's not optional for frontend work.
