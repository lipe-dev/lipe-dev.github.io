---
name: empreguei.com.br
slug: empreguei.com.br
tags: [projects, react, javascript, django, python, material-design, mui, android, firebase]
growth: budding
description: Tinder for Jobs, you get the idea.
images: ['/images/projects/empreguei.com.br/screen-0.webp', '/images/projects/empreguei.com.br/screen-1.webp']
---

# empreguei.com.br

Three apps, one backend, one developer. The job matching platform that introduced me to most of what I still use today.

## The Architecture

Three separate products sharing one [[Django]] + DRF backend:

- **Candidate mobile app** ([[Android]], Java) - the swiping side
- **Company mobile app** ([[Android]], Java) - posting jobs, managing candidates
- **Company web dashboard** ([[React]], [[MUI]]) - full recruitment workflow

[[Firebase]] handled real-time sync across all three. After a match, a chat opened. Not just text: companies could configure async video interviews, candidates could respond on their own time. All of it staying in sync across three different codebases.

## The Matching Algorithm

Started as straightforward filtering: location radius, salary range, required skills, experience level. Good enough to launch.

As user data grew, we layered in a [[Machine Learning]] model that ranked candidates based on actual outcomes. Which profiles led to hires? What patterns showed up in successful matches? The model trained on that data and got better over time.

## Scaling

When a famous actress joined as investor and ambassador, traffic spiked fast. Scaling everything up under pressure as the only engineer was the kind of experience that teaches you a lot about what you'd do differently next time.

## The PostgreSQL Bug

Spent a week hunting a bug that turned out to be a PostgreSQL issue. Not our code. An actual database bug. One of those debugging experiences you don't forget.

## Stack

- [[React]] + [[MUI]] - web dashboard
- [[Django]] + DRF - backend API
- Native [[Android]] Java - both mobile apps
- [[Firebase]] - real-time messaging and sync
- [[Machine Learning]] - match ranking
- [[CI/CD]] - automated deployments to production

## Related

- [[Empreguei]] - The gig and the story behind it
- [[React]] - First professional use
- [[Django]] - Backend framework
- [[Firebase]] - Real-time infrastructure
- [[Machine Learning]] - Matching algorithm
