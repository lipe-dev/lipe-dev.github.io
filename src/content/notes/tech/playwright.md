---
name: Playwright
slug: playwright
tags: [tech, testing, automation]
growth: budding
description: Modern browser automation that just works
---

# Playwright

My go-to for browser automation and e2e testing. Currently setting up e2e
infrastructure at [[eBay]] with it.

## Why Playwright

My ranking for browser automation: Playwright > [[Cypress]] > Selenium.

The criteria: how easy is it to get running, and how reliable are the tests.
Playwright's modern tooling gets everything right. I rarely hit major
roadblocks when writing a test. The auto-waiting, the trace viewer, the
codegen tool. It's all well thought out.

Unless I join a project already using Cypress or Selenium, I'm reaching for
Playwright every time.

## E2E Testing

The primary use case. Real browser, hitting real APIs, using the app like a
user would. No mocking the world. If the test passes, the feature works.

At eBay, I'm building out the e2e test infrastructure with Playwright. Clean
slate, modern tooling, no legacy baggage.

### Writing Reliable Tests

Test reliability depends heavily on UI quality. If the frontend has proper
loading states, error handling, and reflects what's actually happening, you
can just wait for elements to be ready and interact. Playwright's auto-waiting
handles the rest.

The accessibility curb-cut: I focus heavily on accessibility in my own code.
Semantic HTML, proper aria labels, predictable states. The side effect is that
accessible UI is trivially testable. Write for screen readers, get reliable
test selectors for free.

## Browser Automation (Non-Testing)

At [[LogRock]], some insurance providers didn't have APIs. The solution:
Playwright scripts that automated their quote forms. Fill out the form
programmatically, extract the quote, integrate it into our system.

When there's no API, become the user.

### The Insurance Form Nightmare

These weren't simple forms. Hundreds of pages, branching flows, constant back
and forth. Some providers still had Flash in the mix. The same form could
randomly appear with different wording and organization for no apparent
reason. Legacy systems with decades of accumulated weirdness.

The forms updated frequently, breaking automation. You'd write a script, it'd
work for weeks, then silently fail because someone rearranged three fields.
Maintaining those integrations was a constant battle against entropy.

## Related

- [[Cypress]] - The alternative I don't reach for anymore
- [[TypeScript]] - Playwright's TS support is solid

