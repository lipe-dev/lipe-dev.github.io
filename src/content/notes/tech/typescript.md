---
name: TypeScript
slug: typescript
tags: [tech]
growth: budding
---

# TypeScript

My default since 2018. Once you've caught a bug at compile time that would've
been a 3 AM production incident, there's no going back.

## The Philosophy

I'm `any`-allergic. If I wrote the code, it gets typed properly. No shortcuts,
no "I'll fix it later" comments. Types are documentation that the compiler
enforces - why would I give that up?

That said, I'm not religious about it. At [[Enterprise E-Commerce Platform]], there are microservice
payloads that pass through our frontend from god-knows-where in their
architecture. Spending a week typing some legacy mystery object that we
just forward along? That's not engineering, that's busywork. `unknown` with
runtime validation at the boundaries, move on.

## Where I'm Strict

API contracts. Always. The boundary between frontend and backend is where
bugs love to hide. If your API types don't match reality, you're just
decorating your code with lies.

I'll generate types from [[OpenAPI]] specs, use [[Zod]] for runtime validation,
whatever it takes. The API layer is not where you cut corners.

## The Fun Part

I genuinely enjoy TypeScript's type system. Generic constraints, conditional
types, mapped types, `infer` keywords - the whole bag of tricks. There's
something satisfying about crafting a type that catches bugs at compile time
that no amount of runtime validation would find.

When someone asks "can TypeScript even do that?" the answer is usually yes,
and figuring out how is half the fun.

## The Payoff

Refactoring without fear. When I rename a field or change a function
signature, the compiler shows me everywhere that breaks. That confidence
compounds over time - you move faster because you trust the codebase.
