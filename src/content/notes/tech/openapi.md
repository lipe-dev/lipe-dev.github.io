---
name: OpenAPI
slug: openapi
tags: [tech, api, typescript]
growth: budding
description: API contracts that both humans and machines can read
---

# OpenAPI

The spec format for REST APIs. I use it both for documenting APIs I build and
consuming APIs others provide.

## Spec-First at eBay

At [[eBay]], I started the Showroom frontend before a backend developer was
even hired. Rather than guess at the API shape, I wrote the OpenAPI spec
myself. When the backend dev joined, they had a contract to implement against.
Both sides knew exactly what to expect.

This approach works well for greenfield projects. The spec becomes the
handshake between frontend and backend. Disagreements get resolved in the
spec, not in production bugs.

### Tooling

Just YAML and a reader. The client deprecated their internal Swagger UI deployment,
pushing toward AI-assisted workflows. Now we read the YAML directly or paste
it into an online viewer when needed. The spec is documentation that both
humans and [[Claude Code]] can consume.

## Code-First When Iterating

Once the API exists and requirements change (they always do), I switch to
code-first. Update the implementation, regenerate or update the spec to match.
Trying to maintain spec-first purity during rapid iteration just slows
everyone down.

Pragmatism over dogma.

## On Versioning

I've never worked on public APIs where versioning is critical. All my API
work has been internal, consumed by apps we control. When we change an
endpoint, we can update frontend and backend together.

When breaking changes are unavoidable: create the new endpoint first, migrate
consumers, then deprecate the old one. No need for `/v1/` `/v2/` ceremony when
you control both sides.

## The TypeScript Connection

OpenAPI specs can generate [[TypeScript]] types automatically. I haven't
adopted tooling for this yet, but the options look promising:

- **openapi-typescript** - Types only, lightweight
- **orval** - Types plus React Query hooks
- **openapi-fetch** - Typed fetch client

The appeal: change the spec, regenerate types, let the compiler catch
mismatches. No more hoping frontend and backend agree on field names.

## Related

- [[TypeScript]] - Where the generated types live
- [[Zod]] - Runtime validation at API boundaries

