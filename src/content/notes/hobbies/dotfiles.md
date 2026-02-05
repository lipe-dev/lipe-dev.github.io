---
name: Dotfiles
slug: dotfiles
tags: [hobby, hardware, config]
growth: budding
description: Cross-platform config for keyboard-focused workflow
---

# Dotfiles

My configuration files, obsessively tuned for one goal: same muscle memory
on every machine.

## The Setup

I use three operating systems daily:
- **macOS** - Work-issued MacBook for work
- **Windows** - Beast gaming PC, WSL for development
- **Linux** - Older laptop, better battery life and speed

Switching between them shouldn't mean relearning shortcuts.

## The Philosophy

Keyboard-focused workflow. Mouse is for gaming. Everything else: hjkl
navigation, consistent modifiers, muscle memory that transfers.

## Tiling Window Managers

The crown jewel. Three different systems, same behavior:

| OS | Window Manager |
|----|----------------|
| macOS | AeroSpace |
| Windows | GlazeWM |
| Linux | Hyprland (Omarchy) |

Same shortcuts everywhere:
- `Alt+H/J/K/L` for window navigation
- `Alt+1-9` for workspaces
- `Super+Space` for app launcher
- `Super+Shift+N` for Neovim

Similar gaps, similar aesthetics. When I sit down at any machine, my hands
already know what to do.

## Omarchy

DHH's opinionated Arch Linux distro. Comes ready to use with a nice tiling
setup. I gave up on it due to hardware issues on my specific machines, but
the keybind philosophy stuck. The config works anywhere now.

## Editor

Neovim with Kickstart.nvim as the base. Custom plugins:
- `claude-code.nvim` for AI assistance
- `auto-layout.lua` for smart window arrangement
- The usual suspects: surround, toggleterm, treesitter

## Shell

ZSH with Oh My Zsh. Robbyrussell theme (the default), git plugin, nothing
fancy. The shell is for running commands, not showing off a prompt.

## Why Bother?

Context switching has cognitive cost. When I move from my work Mac to my
gaming PC to my Linux laptop, I don't want to think about how to split a
window or switch workspaces. The consistency pays off in flow state.

Also it's just fun to configure things.
