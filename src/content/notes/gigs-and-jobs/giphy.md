---
name: Giphy
slug: giphy
tags: [react, typescript, django, python, styled-components, cypress]
growth: budding
---

# Giphy

You know Giphy. You've used Giphy. Every GIF you've ever sent in Slack probably came from Giphy.

## The Gig

Short but sweet. I worked at [[Giphy]] during an interesting period - there was a feature freeze due to legal stuff (the Facebook acquisition was happening), so new feature development wasn't really on the table. Instead, we focused on refinement, testing, and infrastructure.

Sometimes constraints breed creativity. Or at least really solid engineering foundations.

## What I Actually Built

### The Auth Flow

I rebuilt the entire login and signup flow - magic links, account recovery, two-factor authentication, the works. This wasn't a throwaway feature; it got adopted company-wide and is still in production today. Every time someone logs into Giphy, they're using code I wrote. That's a nice feeling.

Check out [[Giphy.com Login And Signup]] for the deep dive on this project.

### E2E Testing Infrastructure

Implemented [[Cypress]] end-to-end tests and integrated them into the CI pipeline. Before this, E2E testing was spotty at best. After? Full team adoption and actual confidence that deploys wouldn't break critical user flows.

Getting a whole team to actually write and maintain E2E tests is harder than writing the tests themselves. It's a culture shift as much as a technical one.

### UI Component Work

Reworked various UI components, cleaning things up and making them more consistent. The kind of work that doesn't make headlines but makes the codebase nicer to work in.

## The Vibe

Great team, fun product, good engineering culture. Working on something that literally billions of people use (even indirectly) is pretty cool.

## Why I Left

The feature freeze meant I wasn't building new things, and I'm the kind of engineer who needs to build new things. When [[LogRock]] came calling with an opportunity to shape a product from earlier stages, I jumped. No regrets about Giphy, just different priorities at that point in my career.

## Related

- [[Giphy.com Login And Signup]] - The auth system I built
- [[React]] - Primary framework
- [[Cypress]] - E2E testing
- [[Django]] - Backend integration
