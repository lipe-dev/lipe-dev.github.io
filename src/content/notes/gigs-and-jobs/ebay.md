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

## Building Showroom from Scratch

When I joined, there was no frontend. No backend either. I had to design all the API contracts myself before the backend team even started building. It's a different kind of challenge when you're not just consuming APIs but defining what they should look like.

The stack is [[React]] with [[TypeScript]], integrating with eBay's proprietary infrastructure for automated checks, deployments, and monitoring.

### The Auth Puzzle

eBay has multiple authentication systems: internal (for employees) and external (for dealers and partners). Showroom needed to work with both, plus we built a custom permission system on top that integrates with eBay's IDM while adding Showroom-specific role management.

Every user can have different feature toggles and customizations. Dealer A might have access to bulk upload, Dealer B might not. User X within Dealer A might have admin powers, User Y might be read-only. It gets complicated fast.

### Integrations

Showroom hooks into several eBay services:
- **Caramel** (now eBay Secure Checkout) - for handling actual car payments
- **Freespee** - eBay's telephone service integration for dealer communications
- Various internal microservices for real-time bulk operations at scale

## The Migration

Dealer migration from the legacy VMP to Showroom is complete. Moving dealerships with active businesses couldn't be a hard cutover. It had to be gradual, wave by wave, with no downtime dealers could feel.

## The Scale

~1,000 active dealers, 50k+ vehicles, 1M+ photos. Real money, real businesses depending on it working.

## Related

- [[React]] - Primary framework
- [[TypeScript]] - Non-negotiable at this scale
- [[OpenAPI]] - How the API contracts were defined
- [[Playwright]] - E2e test infrastructure
- [[CI/CD]] - eBay's deployment infrastructure
