---
name: agent-deck
slug: agent-deck
tags: [tech, ai, workflow]
growth: seedling
description: Session management for AI coding agents
---

# agent-deck

A session manager for [[Claude Code]] and similar AI coding tools. Found it
on GitHub, adopted it into my workflow.

## Why I Use It

Terminal tab switching was annoying. When you're running multiple AI sessions
(main coding agent, research agent, code reviewer), juggling tabs gets old
fast.

agent-deck + tmux solves this. Shortcuts to switch between sessions, see
what's running, send context between agents. Once you learn the keybindings,
it becomes muscle memory.

## Core Features I Rely On

- **Session management** - Start, stop, switch between multiple Claude sessions
- **MCP binding** - Attach different MCP servers to different sessions
- **Skill management** - Load different skill sets per session
- **Visibility** - See all active sessions, their state, recent output

## TUIs in the IDE

I love TUIs. Having agent-deck running inside my editor (whether [[Neovim]] or
VS Code) means no context switching. The AI sessions, the code, the
terminal output. All in one place.

This extends beyond agent-deck. Lazygit for git operations, other TUI tools
for various tasks. The keyboard-driven workflow from my [[Dotfiles]] carries
straight into development.

## The Maestro Pattern

I run an orchestration session (the "maestro") that spawns and manages other
agents. Tell it what I want to work on, it handles the setup: creates
worktrees, spawns agents, fetches tickets, runs install scripts.

The sub-agents do focused work. The maestro coordinates. I watch the console
and course-correct.

## Related

- [[Claude Code]] - The AI tool it manages
- [[Dotfiles]] - Where the tmux config lives

