---
name: Claude Code
slug: claude-code
tags: [tech, ai, workflow]
growth: budding
description: AI-assisted development done right
---

# Claude Code

Anthropic's CLI for Claude. I've been using it since Sonnet 3.5 dropped in
mid-2024. It's replaced Google, Stack Overflow, and most documentation
browsing in my workflow.

## What I Use It For

Everything, honestly:
- **Idea discussion** - Rubber ducking with something that talks back
- **Research** - Faster than digging through docs
- **Debugging** - Add logs, trace issues, explain weird behavior
- **Code generation** - When I know exactly what I want
- **Refactoring** - Tedious transformations I don't want to do manually

The value extraction comes from knowing how to prompt and when to trust the
output.

## The Maestro Workflow

My setup goes beyond single-session usage. With [[agent-deck]], I run a
maestro session that orchestrates sub-agents:

1. Say "work on ENG-123 on project X"
2. Maestro creates a git worktree for isolation
3. Spawns a main agent inside the worktree
4. Runs setup scripts (nvm, yarn install, etc.)
5. Fetches the ticket from Linear/GitHub/Jira
6. Sends full context to the agent

I switch between agents with agent-deck and tmux, adding info, course
correcting, reviewing output. The agents do the tedious work. I stay in
control.

### Managing Context

At [[eBay]] I have plenty of API usage available (billing plus in-house
models), which makes multi-agent workflows practical. The strategy:

- **Research agents** stay separate. They dig through docs and forums, then
  report only key results to the main agent. No need to pollute the coding
  context with pages of search results.
- **Fresh sessions** for unrelated work. Avoids context contamination.
- **Persistent sessions** for related tasks. If I'm working on features in
  the same area, keeping the session preserves knowledge of patterns and
  standards.

The goal: keep each agent's context focused on what it needs to do its job.

## Where It Works Best

AI shines when you know **what** you want and **how** you want it done. Clear
requirements, established patterns, well-defined scope. In those cases, it's
a massive force multiplier.

The plan file is key. Shape the whole solution before writing a line of code.
When the agent has a solid plan to follow, results are good. When it's
improvising, results get shaky.

## Where It Struggles

Long-term projects and novel implementations. When there's no existing code
or documentation to reference, hallucinations creep in. The model confidently
invents APIs that don't exist or patterns that don't quite work.

How I catch it:
- **Experience** - Years of dev work means I spot when things veer off
- **Research agents** - Separate agents checking forums and docs
- **Code review agents** - Another pass before I accept changes
- **Never leave the console** - Stay engaged, don't blindly accept

AI is a tool. A powerful one. But it's not a replacement for knowing what
you're building.

## Related

- [[agent-deck]] - Session orchestration
- [[TypeScript]] - Most of my AI-assisted work

