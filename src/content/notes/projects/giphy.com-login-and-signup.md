---
name: Giphy.com Login and Signup
slug: giphy.com-login-and-signup
tags: [projects, react, typescript, django, python, styled-components]
growth: budding
description: Authentication flow for Giphy.com
images: ['/images/projects/giphy.com-login-and-signup/1.png','/images/projects/giphy.com-login-and-signup/2.png','/images/projects/giphy.com-login-and-signup/4.png','/images/projects/giphy.com-login-and-signup/5.png']
---

# Giphy.com Login and Signup

The authentication flow for Giphy.com. Login, signup, magic links, password
recovery, email verification, two-factor auth. The pages you hit before you
get to the GIFs.

## What I Built

The frontend is [[React]] with [[TypeScript]] and [[Styled Components]],
talking to a [[Django]] backend. Standard stack, but the styling was anything
but standard. Giphy's brand is loud - bright colors, animations everywhere,
playful typography. Making an auth flow feel fun without being annoying took
some iteration.

## The Email Template Problem

When I arrived, email templates were scattered. Login emails here, recovery
emails there, verification emails somewhere else. Different styles, different
structures, no consistency.

I consolidated everything into a templating system with reusable components.
Header, footer, button styles, typography - define once, use everywhere.
Built a custom Django template tag to make it work with the backend's email
pipeline. Now one change updates every email.

## Still Running

The auth flow I built is still in production. That was years ago. It's
satisfying when code survives contact with real users and real scale.

## Stack

- [[React]] + [[TypeScript]]
- [[Styled Components]]
- [[Django]] backend integration
- Custom email templating system
