---
name: Node.js
slug: node-js
tags: [tech, javascript, backend]
growth: budding
description: Server-side JavaScript runtime
---

# Node.js

The runtime that made [[JavaScript]] a backend language. I use it daily for
server-side work, build tooling, and scripting.

## How I Use It

### Backend for Frontend (BFF)

At [[eBay]], Node.js sits between the frontend and the actual backend services.
The frontend calls Node APIs, which call the real backends. This abstraction
layer handles authentication, data transformation, and keeps the frontend
decoupled from internal service details.

### Build Tooling

Custom build scripts for things that can't be configured declaratively. At
eBay, we handle internal vs external authentication at build time through
Node scripts. When the build system needs logic, Node is there.

### Standalone Backends

[[Faz3D]] runs on a Node backend that processes uploaded 3D models, integrates
with Orca Slicer, and generates print estimates. File processing, external
tool integration, API endpoints. Typical backend work.

### Scripts and Automation

Quick utilities, data processing, CI/CD helpers. When bash gets awkward,
Node is the next step.

## Frameworks

I've mostly used Express because that's what the [[eBay]] stack has, plus
serverless environments like Google Cloud Functions. Haven't explored
Fastify, Hono, or the newer options yet. Recognized gap, future experiment.

## ESM vs CommonJS

If it works, it works. I'm not joining a project to religiously convert their
module system. CommonJS codebase? I write CommonJS. ESM codebase? I write ESM.

I prefer the `import`/`export` syntax. It feels natural and matches other
languages. But I'm not going to die on that hill.

For new projects, I let the framework handle it. [[Next.js]], [[SvelteKit]],
Vite. They deal with the bundling complexity so I can focus on delivering
value to clients and users instead of arguing about module systems.

## On Deno and Bun

I've tried both on test projects. They work. Had some hiccups. Don't see a
compelling reason to migrate.

Most of my work builds on established Node infrastructure. Selling a full
migration to experimental tooling is a hard sell that I don't buy into yet.
The ecosystem maturity and battle-tested stability of Node still wins for
production work.

## Related

- [[JavaScript]] - The language
- [[TypeScript]] - How I actually write it
- [[Faz3D]] - Node backend example

