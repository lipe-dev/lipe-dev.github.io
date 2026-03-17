---
name: Geocart
slug: geocart
tags: [projects, django, python, react-native, expo, graphql]
growth: budding
description: Real-time disaster monitoring and emergency-response coordination
---

# Geocart

Built for *Proteção a Desastres* (Disaster Protection), a Brazilian civic
tech initiative for emergency response coordination. The system tracks
geographic locations and their status in real time: OK, WARNING, or CRITICAL.
Field workers send updates, alerts propagate to connected clients, and an
AI chatbot handles coordination queries.

## The Architecture

A Django REST Framework backend with Pusher for real-time events. Status
updates flow from the API through Pusher WebSocket channels to a React Native
(Expo) mobile app. The chatbot relay sits on top: messages go to a chatbot.com
integration, the bot replies via webhook, and the reply gets pushed to the
originating client's Pusher channel.

```
Mobile client → POST /api/chat → chatbot.com
                                    ↓ (async webhook)
                              POST /api/messages
                                    ↓
                              Pusher.trigger(session_id, ...)
                                    ↓
                              Client receives reply
```

The backend also supports login by phone number or username, a custom auth
backend on top of Django's standard auth system.

## The Stack

- Django 2.2 + Django REST Framework
- Pusher.io for real-time events
- chatbot.com + Blip for AI relay
- JWT auth (djangorestframework-simplejwt)
- Docker + Heroku via GitLab CI
- React Native (Expo) mobile client

## Current State

Prototype. The core domain works (places, status updates, news entries,
chatbot relay), but it was built fast and shows it: hardcoded credentials,
no tests, Django 2.2 which has been EOL since 2022. Sitting in the
resurrection queue when there's time to clean it up properly.
