---
name: Empreguei
slug: empreguei
tags: [react, django, python, android, firebase, material-design, mui, machine-learning, ci-cd]
growth: budding
---

# Empreguei

Tinder, but for jobs. You swipe right on opportunities, companies swipe right on you, and when there's a match - boom, you're chatting about employment instead of dinner plans.

## The Product

[[Empreguei]] was a job matching platform with mobile apps for job seekers (swipe interface) and a web app for companies to post positions and manage candidates. The magic was in the matching algorithm - not just filtering by keywords, but actually trying to connect the right people with the right opportunities.

Check out [[empreguei.com.br]] for the full technical deep-dive.

## The Numbers

- **100k+** Google Play downloads (CV says 100k, my notes said 50k - memory is fuzzy but it was a lot)
- **1000+** companies actively hiring through the platform
- Endorsed by one of Brazil's largest mall groups
- Eventually acquired

## What Made It Special

### The Matching Algorithm

The core challenge was building a matching system that actually worked. We considered location, salary ranges, required skills, experience levels - the usual stuff. But as user data grew, we built a [[Machine Learning]] model that ranked matches based on actual outcomes. Which matches led to hires? Which candidates engaged with which types of jobs? The algorithm learned and improved.

### Real-Time Everything

After a match, the app opened a chat interface. But not just text - we had automated interview features with voice and video responses. Companies could set up async interviews, candidates could respond on their own time. All of this needed real-time sync across three different apps (two mobile, one web).

[[Firebase]] was the backbone for the real-time stuff.

## Tech Stack Firsts

This project was my introduction to several technologies that became staples of my career:
- [[React]] for the web app - turned out to be a great bet
- [[Django]] and DRF for the backend - also a great bet
- [[Material Design]] and [[MUI]] for UI consistency
- Native [[Android]] Java for the mobile app
- [[CI/CD]] pipelines with automated deployments

## The Solo Engineer Life

For most of the company's existence, I was the only engineer. Every feature, every bug fix, every deployment, every 3 AM "the server is down" panic - all me.

It was exhausting and educational in equal measure. You learn fast when there's no one else to ask for help.

## The Ending

The company eventually shut down. Even with a solid product, strong traction, and a team that believed in the mission, startups can fail. Market timing, funding, competition - a million factors beyond code quality.

It's a humbling reminder that building something great isn't enough. But I'm still proud of what we built and grateful for what it taught me.

## Related

- [[empreguei.com.br]] - Technical project page
- [[React]] - First professional contact
- [[Django]] - Backend framework
- [[Firebase]] - Real-time infrastructure
- [[Machine Learning]] - Matching algorithm
