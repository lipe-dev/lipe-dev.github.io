---
name: eBay
slug: ebay
tags: [work, react, typescript, ci-cd]
growth: budding
---

# eBay

Yes, that eBay. The one you've definitely used to buy something questionable at 2 AM.

## The Gig

Primary front-end developer on Showroom, a platform replacing eBay Motors' legacy internal tooling (Vehicle Management Platform) for bulk vehicle listings. Think car dealerships managing hundreds or thousands of vehicles at a time. They need serious tools, not the basic listing flow regular sellers use.

Solo on the frontend. One full-stack engineer helped occasionally, around five backend engineers on the other side.

## Building from Scratch

When I joined, there was no frontend. No backend either. I designed all the API contracts before the backend team started building, using [[OpenAPI]] specs as the source of truth. It's a different challenge when you're not consuming APIs but defining what they should look like.

Stack: [[React]] + [[TypeScript]], integrating with eBay's proprietary SSR infrastructure, CI/CD pipelines, and internal microservices.

## What I Built

### API Integration Pattern

SSR handles the initial data load, hands it off to TanStack Query on the client to initialize and keep fresh. Filterable state lives in URL params so search state is shareable and bookmarkable. Clean separation between the server-rendered shell and the client-side data layer.

### Vehicle Photo Management

Bulk drag-and-drop photo operations. Import from multiple sources including Dropbox. Management of photos coming from external data feeds. Handles the full photo lifecycle for dealerships listing hundreds of vehicles at a time.

### Feed Management

A multi-state window that morphs into different layouts depending on the lead type: contacts, watches, unwatches, bids. Shared components across all states. Real-time chat integrated directly with eBay's messaging system.

### The Dealer Config Form

The most complex piece. A massive form that controls everything about how a dealer operates on Showroom: basic data, listing configs, feed transformation rules, and automated listing logic. Sub-forms, dynamic data arrays, deeply nested [[Zod]] schemas.

The depth of what's configurable: if you want vehicles of a certain category, make, model, year range, mileage range, and photo count to automatically list as auctions for X days at a fixed price that auto-accepts offers within Y% of asking price, you can set that up. All surfaced through a structured, validated form. This form is the key to everything a dealer does on the platform.

### CSV and Excel Export

Client-side generation of CSVs and Excel files from API responses. No backend round-trip for data exports.

## The Auth and Permissions System

eBay has multiple authentication systems: internal (for employees) and external (for dealers). Showroom runs as two separate deployments sharing the same codebase, with different auth configurations. Once logged in, a unified JWT system works across both.

On top of that, a custom permission gate system with fine-grained control over what each user type can access. Down to individual form fields being read-only or writable. Up to entire route groups being invisible to certain roles. Dealer A might have bulk upload, Dealer B might not. User X within Dealer A might be admin, User Y read-only.

## Accessibility

The legacy platform had essentially none. Showroom follows proper standards throughout and scores perfectly on accessibility benchmarks. Full keyboard navigation, screen reader support, the works.

## The Migration

Dealer migration from VMP to Showroom is complete. Had to be gradual, wave by wave. Dealers have active businesses and can't afford downtime.

## The Scale

~1,000 active dealers, 50k+ vehicles, 1M+ photos.

Zero failure rate on publishing listings from all feed sources into eBay listings. Getting there was a serious undertaking: the edge case surface is enormous when you're dealing with real-world vehicle data at scale. Vehicles without VINs, malformed feed data, missing required fields, incompatible listing configs. Every edge case that could silently fail now doesn't.

## Related

- [[React]] - Primary framework
- [[TypeScript]] - Non-negotiable at this scale
- [[OpenAPI]] - API contract definition
- [[Zod]] - Form validation at scale
- [[Playwright]] - E2e test infrastructure
- [[CI/CD]] - eBay's deployment infrastructure
