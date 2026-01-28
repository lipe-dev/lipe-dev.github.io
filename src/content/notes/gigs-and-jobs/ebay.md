---
name: eBay
slug: ebay
tags: [react, typescript, ci-cd]
growth: budding
---

# eBay

Yes, that eBay. The one you've definitely used to buy something questionable at 2 AM.

## The Gig

I'm the primary front-end developer on Showroom, a platform that's replacing eBay Motors' legacy VMP (Vehicle Management Platform) for bulk vehicle listings. Think car dealerships managing hundreds or thousands of vehicles - they need serious tools, not the basic listing flow regular sellers use.

## Building Showroom from Scratch

When I joined, there was no front-end. No backend either, actually. I had to design all the API contracts myself before the backend team even started building. It's a different kind of challenge when you're not just consuming APIs but defining what they should look like.

The stack is [[React]] with [[TypeScript]], integrating with eBay's proprietary infrastructure for automated checks, deployments, and monitoring.

### The Auth Puzzle

eBay has multiple authentication systems - internal (for employees) and external (for dealers and partners). Showroom needed to work with both, plus we built a custom permission system on top that integrates with eBay's IDM while adding Showroom-specific role management.

Every user can have different feature toggles and customizations. Dealer A might have access to bulk upload, Dealer B might not. User X within Dealer A might have admin powers, User Y might be read-only. It gets complicated fast.

### Integrations

The platform hooks into several eBay services:
- **Caramel** (now eBay Secure Checkout) - for handling actual car payments, which is wild when you think about it
- **Freespee** - eBay's telephone service integration for dealer communications
- Various internal microservices for real-time bulk operations at scale

## Current State

Launch was successful. Dealer migration is ongoing - we're gradually moving dealerships from the legacy system to Showroom. It's the kind of migration where you can't just flip a switch; dealers have businesses to run and can't afford downtime.

## The Scale

This isn't a side project. We're talking about a platform that handles bulk operations for dealerships listing hundreds of vehicles at a time. Real money, real businesses depending on it working correctly.

## Related

- [[React]] - Primary framework
- [[TypeScript]] - Type safety is non-negotiable at this scale
- [[CI/CD]] - eBay's deployment infrastructure
