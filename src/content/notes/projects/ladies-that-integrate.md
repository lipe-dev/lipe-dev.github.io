---
name: Ladies That Integrate
slug: ladies-that-integrate
tags: [projects, python]
growth: budding
description: Automated job posting graphics from Airtable
---

# Ladies That Integrate

The evolution of [[Vigilant Guide]]. Same purpose (Instagram Story graphics
for Ladies That UX Floripa), but fully automated.

## From UI to CLI

The web tool worked, but there was still manual data entry. Hanane was
already tracking job posts in Airtable. Why copy-paste into a web form when
we could just read the database directly?

So I built a CLI that:
1. Fetches job postings from Airtable (status="Backlog", no image yet)
2. Generates graphics for each one using Pillow
3. Batch-updates Airtable to mark them as processed
4. Plays the GTA San Andreas theme when done

That last part is important for morale.

## Why Pillow Won

The browser Canvas API works, but typography is limited. Pillow gave us:
- Custom fonts (Bariol, the community's brand font)
- Better text wrapping and centering
- Higher quality output
- Batch processing without a browser

The image generation code is more complex, but the results are cleaner.

## The Pipeline

```
Airtable (job posts)
  → Python fetches batch
  → Pillow composites text onto background
  → Saves PNG with job ID
  → Updates Airtable in chunks of 10
  → "Ah shit, here we go again" plays
```

## Smart Text Wrapping

The trickiest part: fitting variable-length job titles onto fixed-size
graphics. Custom algorithm that:
- Respects line width constraints
- Breaks at punctuation when possible
- Centers each line
- Adjusts spacing dynamically

Not rocket science, but satisfying to get right.

## Community Impact

Small tool, real impact. Hanane could process a week's worth of job posts
in seconds instead of hours. More time for actually running the community,
less time pushing pixels.

Sometimes the best projects are tiny automation scripts that save someone
you care about from tedious work.
