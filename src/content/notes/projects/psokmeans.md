---
name: PSOKMeans
slug: psokmeans
tags: [projects, python, machine-learning, data-mining]
growth: budding
description: Undergraduate thesis - PSO-optimized K-Means clustering
---

# PSOKMeans

My undergraduate thesis at [[UNIFEI]]: using Particle Swarm Optimization as
an initialization mechanism for K-Means clustering. Fancy words for "can we
make clustering less random and more reliable?"

## The Problem

K-Means clustering has a dirty secret: results vary wildly depending on where
you randomly place the initial centroids. Run it twice, get different clusters.
Not ideal when you're trying to do science.

## The Solution

Instead of random initialization, use PSO to search for good starting positions.
Each "particle" in the swarm encodes a set of centroids. The swarm explores the
solution space, particles share information about promising regions, and after
a few iterations you get better starting points than random chance.

## The Results

It worked. PSO initialization consistently outperformed random initialization
on the standard datasets (Iris, Glass, Seeds, Yeast). The thesis has the
numbers and statistical analysis.

<!-- TODO: Find the thesis PDF and make it downloadable here -->

## The Tech

- [[Python]] with NumPy, SciPy, PySwarm
- Rand Index for evaluation (measures clustering quality against ground truth)
- 100 iterations per test, 4 rounds, statistical aggregation
- Matplotlib 3D visualizations of cluster results and particle swarm positions

## The Experience

Wrote 40+ pages overnight to hit the deadline. Busy semester - I was preparing
to leave for [[University of Maryland]] and didn't want loose ends. Poor time
management or clutch performance? Both.

My advisor was Isabella Drummond, who taught most of our AI courses: neural
networks, [[data mining]], the works. She gave me pointers and freedom to work
independently. Good mentorship style.

Presenting to the "banca" (thesis committee) was fun. Got some of my favorite
professors there, exchanged a lot of ideas. My friends from [[Utyl Business Platforms]]
and my girlfriend (now wife) came to watch.

## Reflection

Sometimes I wonder if I should have pushed the academic path further before
chasing industry money. The research mindset - systematic experimentation,
statistical rigor, building on existing work - still shapes how I approach
engineering problems. But the pull of actually building things people use
was too strong.
